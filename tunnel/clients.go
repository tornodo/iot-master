package tunnel

import (
	"github.com/zgwit/iot-master/v4/lib"
	"github.com/zgwit/iot-master/v4/pkg/db"
	"github.com/zgwit/iot-master/v4/pkg/log"
	"xorm.io/xorm"
)

var clients lib.Map[Client]

func LoadClients() error {
	var clients []*Client
	err := db.Engine.Find(&clients)
	if err != nil {
		if err == xorm.ErrNotExist {
			return nil
		}
		return err
	}
	for _, m := range clients {
		if m.Disabled {
			continue
		}
		go func(m *Client) {
			err := LoadClient(m)
			if err != nil {
				log.Error(err)
			}
		}(m)
	}
	return nil
}

func LoadClient(m *Client) error {
	clients.Store(m.Id, m)
	return m.Open()
}

func GetClient(id string) *Client {
	return clients.Load(id)
}
