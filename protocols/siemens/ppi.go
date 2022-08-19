package siemens

import (
	"iot-master/link"
)

//PPI 协议
type PPI struct {
	link link.Tunnel
}

//Read 读到数据
func (t *PPI) Read(address string, length int) ([]byte, error) {
	return nil, nil
}

//Write 写入数据
func (t *PPI) Write(address string, values []byte) error {
	return nil
}
