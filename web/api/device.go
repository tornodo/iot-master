package api

import (
	"github.com/gin-gonic/gin"
	"github.com/zgwit/iot-master/database"
	"github.com/zgwit/iot-master/log"
	"github.com/zgwit/iot-master/master"
	"github.com/zgwit/iot-master/model"
	"github.com/zgwit/storm/v3/q"
	"golang.org/x/net/websocket"
)

func deviceRoutes(app *gin.RouterGroup) {
	app.POST("list", deviceList)
	app.POST("create", deviceCreate)

	app.GET("event/clear", deviceEventClearAll)
	app.GET("alarm/clear", deviceAlarmClearAll)

	app.Use(parseParamId)
	app.GET(":id", deviceDetail)
	app.POST(":id", deviceUpdate)
	app.GET(":id/delete", deviceDelete)
	app.GET(":id/start", deviceStart)
	app.GET(":id/stop", deviceStop)
	app.GET(":id/enable", deviceEnable)
	app.GET(":id/disable", deviceDisable)
	app.GET(":id/context", deviceContext)
	app.GET(":id/watch", deviceWatch)
	app.POST(":id/event/list", deviceEvent)
	app.GET(":id/event/clear", deviceEventClear)
	app.POST(":id/alarm/list", deviceAlarm)
	app.GET(":id/alarm/clear", deviceAlarmClear)
}

func deviceList(ctx *gin.Context) {
	devices, cnt, err := normalSearch(ctx, database.Master, &model.Device{})
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyList(ctx, devices, cnt)
}

func deviceCreate(ctx *gin.Context) {
	var device model.Device
	err := ctx.ShouldBindJSON(&device)
	if err != nil {
		replyError(ctx, err)
		return
	}

	err = database.Master.Save(&device)
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, device)

	//启动
	//deviceStart(ctx)
	go func() {
		_, err := master.LoadDevice(device.Id)
		if err != nil {
			log.Error(err)
			return
		}
	}()
}

func deviceDetail(ctx *gin.Context) {
	var device model.Device
	err := database.Master.One("Id", ctx.GetInt("id"), &device)
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyOk(ctx, device)
}

func deviceUpdate(ctx *gin.Context) {
	var device model.Device
	err := ctx.ShouldBindJSON(&device)
	if err != nil {
		replyError(ctx, err)
		return
	}
	device.Id = ctx.GetInt("id")

	err = database.Master.Update(&device)
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, device)

	//重新启动
	go func() {
		dev := master.GetDevice(ctx.GetInt("id"))
		if dev == nil {
			return
		}
		err = dev.Stop()
		if err != nil {
			log.Error(err)
			return
		}
		err = dev.Start()
		if err != nil {
			log.Error(err)
			return
		}
	}()
}

func deviceDelete(ctx *gin.Context) {
	device := model.Device{Id: ctx.GetInt("id")}
	err := database.Master.DeleteStruct(&device)
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, device)

	//关闭
	go func() {
		device := master.GetDevice(ctx.GetInt("id"))
		if device == nil {
			return
		}
		err := device.Stop()
		if err != nil {
			log.Error(err)
			return
		}
	}()
}

func deviceStart(ctx *gin.Context) {
	device := master.GetDevice(ctx.GetInt("id"))
	if device == nil {
		replyFail(ctx, "not found")
		return
	}
	err := device.Start()
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func deviceStop(ctx *gin.Context) {
	device := master.GetDevice(ctx.GetInt("id"))
	if device == nil {
		replyFail(ctx, "not found")
		return
	}
	err := device.Stop()
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func deviceEnable(ctx *gin.Context) {
	err := database.Master.UpdateField(&model.Device{Id: ctx.GetInt("id")}, "Disabled", false)
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyOk(ctx, nil)

	//启动
	go func() {
		device := master.GetDevice(ctx.GetInt("id"))
		if device == nil {
			return
		}
		err := device.Start()
		if err != nil {
			log.Error(err)
			return
		}
	}()
}

func deviceDisable(ctx *gin.Context) {
	err := database.Master.UpdateField(&model.Device{Id: ctx.GetInt("id")}, "Disabled", true)
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyOk(ctx, nil)

	//关闭
	go func() {
		device := master.GetDevice(ctx.GetInt("id"))
		if device == nil {
			return
		}
		err := device.Stop()
		if err != nil {
			log.Error(err)
			return
		}
	}()
}

func deviceContext(ctx *gin.Context) {
	device := master.GetDevice(ctx.GetInt("id"))
	if device == nil {
		replyFail(ctx, "找不到设备")
		return
	}
	replyOk(ctx, device.Context)
}

func deviceWatch(ctx *gin.Context) {
	device := master.GetDevice(ctx.GetInt("id"))
	if device == nil {
		replyFail(ctx, "找不到设备")
		return
	}
	websocket.Handler(func(ws *websocket.Conn) {
		watchAllEvents(ws, device)
	}).ServeHTTP(ctx.Writer, ctx.Request)
}

func deviceEvent(ctx *gin.Context) {
	events, cnt, err := normalSearchById(ctx, database.History, "DeviceId", ctx.GetInt("id"), &model.DeviceEvent{})
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyList(ctx, events, cnt)
}

func deviceEventClear(ctx *gin.Context) {
	err := database.History.Select(q.Eq("DeviceId", ctx.GetInt("id"))).Delete(&model.DeviceEvent{})
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func deviceEventClearAll(ctx *gin.Context) {
	err := database.History.Drop(&model.DeviceEvent{})
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func deviceAlarm(ctx *gin.Context) {
	alarms, cnt, err := normalSearchById(ctx, database.History, "DeviceId", ctx.GetInt("id"), &model.DeviceAlarm{})
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyList(ctx, alarms, cnt)
}

func deviceAlarmClear(ctx *gin.Context) {
	err := database.History.Select(q.Eq("DeviceId", ctx.GetInt("id"))).Delete(&model.DeviceAlarm{})
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func deviceAlarmClearAll(ctx *gin.Context) {
	err := database.History.Drop(&model.DeviceAlarm{})
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}
