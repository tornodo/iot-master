package api

import (
	"github.com/gin-gonic/gin"
	"github.com/zgwit/iot-master/database"
	"github.com/zgwit/iot-master/master"
	"github.com/zgwit/iot-master/model"
	"golang.org/x/net/websocket"
)

func linkRoutes(app *gin.RouterGroup) {
	app.POST("list", linkList)
	app.POST("create", linkCreate)

	app.Use(parseParamId)
	app.POST(":id/update", linkUpdate)
	app.GET(":id/delete", linkDelete)
	app.GET(":id/close", linkClose)
	app.GET(":id/enable", linkEnable)
	app.GET(":id/disable", linkDisable)
	app.GET(":id/watch", linkWatch)
}

func linkList(ctx *gin.Context) {
	var links []model.Link
	cnt, err := normalSearch(ctx, database.Master, &links)
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyList(ctx, links, cnt)
}

func linkCreate(ctx *gin.Context) {
	var link model.Link
	err := ctx.ShouldBindJSON(&link)
	if err != nil {
		replyError(ctx, err)
		return
	}

	err = database.Master.Save(&link)
	if err != nil {
		replyError(ctx, err)
		return
	}

	//TODO 启动

	replyOk(ctx, link)
}

func linkUpdate(ctx *gin.Context) {
	var pid paramID
	err := ctx.ShouldBindUri(&pid)
	if err != nil {
		replyError(ctx, err)
		return
	}

	var link model.Link
	err = ctx.ShouldBindJSON(&link)
	if err != nil {
		replyError(ctx, err)
		return
	}
	link.ID = pid.ID

	err = database.Master.Update(&link)
	if err != nil {
		replyError(ctx, err)
		return
	}

	//TODO 重新启动

	replyOk(ctx, link)
}

func linkDelete(ctx *gin.Context) {
	var pid paramID
	err := ctx.ShouldBindUri(&pid)
	if err != nil {
		replyError(ctx, err)
		return
	}
	link := model.Link{ID: pid.ID}
	err = database.Master.DeleteStruct(&link)
	if err != nil {
		replyError(ctx, err)
		return
	}

	//TODO 重新启动

	replyOk(ctx, link)
}

func linkClose(ctx *gin.Context) {

	link := master.GetLink(ctx.GetInt("id"))
	if link == nil {
		replyFail(ctx, "link not found")
		return
	}
	err := link.Instance.Close()
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, nil)
}

func linkEnable(ctx *gin.Context) {
	err := database.Master.UpdateField(&model.Link{ID: ctx.GetInt("id")}, "Disabled", false)
	if err != nil {
		replyError(ctx, err)
		return
	}
	replyOk(ctx, nil)
}

func linkDisable(ctx *gin.Context) {
	err := database.Master.UpdateField(&model.Link{ID: ctx.GetInt("id")}, "Disabled", true)
	if err != nil {
		replyError(ctx, err)
		return
	}
	//TODO 关闭
	replyOk(ctx, nil)
}

func linkWatch(ctx *gin.Context) {
	link := master.GetLink(ctx.GetInt("id"))
	if link == nil {
		replyFail(ctx, "找不到链接")
		return
	}
	websocket.Handler(func(ws *websocket.Conn) {
		watchAllEvents(ws, link.Instance)
	}).ServeHTTP(ctx.Writer, ctx.Request)
}
