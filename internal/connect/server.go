package connect

import (
	"fmt"
	"iot-master/link"
	"iot-master/model"
	"iot-master/pkg/events"
)

//Server 通道
type Server interface {
	events.EventInterface

	Open() error
	Close() error
	GetTunnel(id uint64) link.Tunnel
	Running() bool
}

//NewServer 创建通道
func NewServer(server *model.Server) (Server, error) {
	var svr Server
	switch server.Type {
	case "tcp":
		svr = newServerTCP(server)
		break
	case "udp":
		svr = newServerUDP(server)
		break
	default:
		return nil, fmt.Errorf("Unsupport type %s ", server.Type)
	}

	return svr, nil
}
