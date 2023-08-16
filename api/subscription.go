package api

import (
	"github.com/gin-gonic/gin"
	"github.com/zgwit/iot-master/v3/model"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询订阅数量
// @Schemes
// @Description 查询订阅数量
// @Tags subscription
// @Param search body curd.ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[int64] 返回订阅数量
// @Router /subscription/count [post]
func noopSubscriptionCount() {}

// @Summary 查询订阅
// @Schemes
// @Description 查询订阅
// @Tags subscription
// @Param search body curd.ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyList[model.Subscription] 返回订阅信息
// @Router /subscription/search [post]
func noopSubscriptionSearch() {}

// @Summary 查询订阅
// @Schemes
// @Description 查询订阅
// @Tags subscription
// @Param search query curd.ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyList[model.Subscription] 返回订阅信息
// @Router /subscription/list [get]
func noopSubscriptionList() {}

// @Summary 创建订阅
// @Schemes
// @Description 创建订阅
// @Tags subscription
// @Param search body model.Subscription true "订阅信息"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/create [post]
func noopSubscriptionCreate() {}

// @Summary 修改订阅
// @Schemes
// @Description 修改订阅
// @Tags subscription
// @Param id path int true "订阅ID"
// @Param subscription body model.Subscription true "订阅信息"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/{id} [post]
func noopSubscriptionUpdate() {}

// @Summary 获取订阅
// @Schemes
// @Description 获取订阅
// @Tags subscription
// @Param id path int true "订阅ID"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/{id} [get]
func noopSubscriptionGet() {}

// @Summary 删除订阅
// @Schemes
// @Description 删除订阅
// @Tags subscription
// @Param id path int true "订阅ID"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/{id}/delete [get]
func noopSubscriptionDelete() {}

// @Summary 启用订阅
// @Schemes
// @Description 启用订阅
// @Tags subscription
// @Param id path int true "订阅ID"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/{id}/enable [get]
func noopSubscriptionEnable() {}

// @Summary 禁用订阅
// @Schemes
// @Description 禁用订阅
// @Tags subscription
// @Param id path int true "订阅ID"
// @Accept json
// @Produce json
// @Success 200 {object} curd.ReplyData[model.Subscription] 返回订阅信息
// @Router /subscription/{id}/disable [get]
func noopSubscriptionDisable() {}

// @Summary 导出订阅
// @Schemes
// @Description 导出订阅
// @Tags subscription
// @Accept json
// @Produce octet-stream
// @Router /subscription/export [get]
func noopSubscriptionExport() {}

// @Summary 导入订阅
// @Schemes
// @Description 导入订阅
// @Tags subscription
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} curd.ReplyData[int64] 返回订阅数量
// @Router /subscription/import [post]
func noopSubscriptionImport() {}

func subscriptionRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[model.Subscription]())
	app.POST("/search", curd.ApiSearch[model.Subscription]())
	app.GET("/list", curd.ApiList[model.Subscription]())
	app.POST("/create", curd.ApiCreateHook[model.Subscription](nil, nil))
	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[model.Subscription]())
	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[model.Subscription](nil, nil,
		"user_id", "product_id", "device_id", "level", "channels", "disabled"))
	app.GET("/:id/delete", curd.ParseParamStringId, curd.ApiDeleteHook[model.Subscription](nil, nil))
	app.GET("/export", curd.ApiExport("subscription", "subscription"))
	app.POST("/import", curd.ApiImport("subscription"))

	app.GET(":id/disable", curd.ParseParamStringId, curd.ApiDisableHook[model.Subscription](true, nil, nil))
	app.GET(":id/enable", curd.ParseParamStringId, curd.ApiDisableHook[model.Subscription](false, nil, nil))
}
