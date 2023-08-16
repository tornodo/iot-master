package device

import (
	"github.com/zgwit/iot-master/v3/model"
	"github.com/zgwit/iot-master/v3/payload"
	"github.com/zgwit/iot-master/v3/pkg/db"
	"github.com/zgwit/iot-master/v3/pkg/log"
	"github.com/zgwit/iot-master/v3/pkg/mqtt"
	"strings"
)

func SubscribeEvent() error {
	mqtt.SubscribeStruct[payload.Event]("up/event/+/+", func(topic string, event *payload.Event) {
		topics := strings.Split(topic, "/")
		//pid := topics[2]
		id := topics[3]

		dev, err := Ensure(id)
		if err != nil {
			log.Error(err)
			return
		}

		//保存数据库
		_, _ = db.Engine.InsertOne(model.DeviceEvent{
			DeviceId: id,
			Name:     event.Name,
			Label:    event.Title,
			Output:   event.Output,
		})

		switch event.Name {
		case "online":
			dev.Values["$online"] = true
		case "offline":
			dev.Values["$online"] = false
		}
	})

	return nil
}
