package service

import (
	"fmt"
	"github.com/zgwit/iot-master/model"
)

type Service interface {
	Open() error
	Close() error
	GetLink(id int)(Link, error)
	OnLink(fn func(link Link))
}

func NewService(service *model.Service) (Service, error)  {
	var svc Service
	switch service.Type {
	case "tcp-client":
		svc = newNetClient(service, "tcp")
		break
	case "tcp-server":
		svc = newTcpServer(service)
		break
	case "udp-client":
		svc = newNetClient(service, "udp")
		break
	case "udp-server":
		svc = NewUdpServer(service)
		break
	case "serial":
		break
	default:
		return nil, fmt.Errorf("Unsupport type %s ", service.Type)
	}
	return svc, nil
}