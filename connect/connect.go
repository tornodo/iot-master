package connect

import (
	"fmt"
	"github.com/zgwit/iot-master/database"
	"github.com/zgwit/iot-master/model"
)

//NewTunnel 创建通道
func NewTunnel(tunnel *model.Tunnel) (Tunnel, error) {
	var tnl Tunnel
	switch tunnel.Type {
	case "tcp-client":
		tnl = newNetClient(tunnel, "tcp")
		break
	case "tcp-server":
		tnl = newTcpServer(tunnel)
		break
	case "udp-client":
		tnl = newNetClient(tunnel, "udp")
		break
	case "udp-server":
		tnl = newUdpServer(tunnel)
		break
	case "serial":
		tnl = newSerial(tunnel)
		break
	default:
		return nil, fmt.Errorf("Unsupport type %s ", tunnel.Type)
	}

	tnl.On("open", func() {
		_ = database.History.Save(model.TunnelHistory{
			TunnelID: tunnel.ID,
			History:  "open",
		})
	})

	tnl.On("close", func() {
		_ = database.History.Save(model.TunnelHistory{
			TunnelID: tunnel.ID,
			History:  "close",
		})
	})

	tnl.On("link", func(conn Link) {
		_ = database.History.Save(model.LinkHistory{
			LinkID:  conn.ID(),
			History: "online",
		})
		conn.Once("close", func() {
			_ = database.History.Save(model.LinkHistory{
				LinkID:  conn.ID(),
				History: "offline",
			})
		})
	})

	return tnl, nil
}
