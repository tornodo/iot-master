package modbus

import (
	"github.com/zgwit/iot-master/v4/connect"
	"github.com/zgwit/iot-master/v4/device"
	"github.com/zgwit/iot-master/v4/protocol"
	"github.com/zgwit/iot-master/v4/types"
)

//var code = []types.Code{
//	{Code: 1, Label: "线圈"},
//	{Code: 2, Label: "离散输入"},
//	{Code: 3, Label: "保持寄存器"},
//	{Code: 4, Label: "输入寄存器"},
//}

var code = types.FormItem{Key: "code", Label: "功能码", Type: "select", Options: []types.FormSelectOption{
	{Value: 1, Label: "线圈 01"},
	{Value: 2, Label: "离散输入 02"},
	{Value: 3, Label: "保持寄存器 03"},
	{Value: 4, Label: "输入寄存器 04"},
}}

var options = []types.FormItem{
	{Key: "timeout", Label: "超时", Tips: "毫秒", Type: "number", Min: 1, Max: 5000},
}

var pollers = []types.FormItem{
	code,
	{Key: "address", Label: "地址", Type: "number", Min: 0, Max: 5000},
	{Key: "address", Label: "地址", Type: "number", Min: 0, Max: 5000},
}

var mappers = []types.FormItem{
	code,
	{Key: "name", Label: "变量", Type: "text", Required: true},
	{Key: "address", Label: "地址", Type: "number", Required: true, Min: 0, Max: 5000},
	{Key: "length", Label: "长度", Type: "number", Required: true, Min: 0, Max: 5000},
	{Key: "type", Label: "数据类型", Type: "select", Options: []types.FormSelectOption{
		{Label: "INT16", Value: "int16"},
		{Label: "UINT16", Value: "uint16"},
		{Label: "INT32", Value: "int32"},
		{Label: "UINT32", Value: "uint32"},
		{Label: "FLOAT", Value: "float"},
		{Label: "DOUBLE", Value: "double"},
	}, Default: "uint16"},
	{Key: "be", Label: "大端", Type: "switch", Default: true},
	{Key: "rate", Label: "倍率", Type: "number", Default: 1},
	{Key: "correct", Label: "纠正", Type: "number", Default: 0},
	{Key: "bits", Label: "取位", Type: "object", Array: true, Children: []types.FormItem{
		{Key: "name", Label: "变量", Type: "text", Required: true},
		{Key: "bit", Label: "位", Type: "number", Required: true, Min: 0, Max: 15},
	}},
}

var modbusRtu = &protocol.Protocol{
	Name:  "modbus-rtu",
	Label: "Modbus RTU",
	Factory: func(tunnel string, conn connect.Conn, opts types.Options) (device.Adapter, error) {
		adapter := &Adapter{
			modbus: NewRTU(conn, opts),
		}
		err := adapter.start(tunnel, opts)
		if err != nil {
			return nil, err
		}
		return adapter, nil
	},
	Options: options,
	Mappers: mappers,
	Pollers: pollers,
}

var modbusTCP = &protocol.Protocol{
	Name:  "modbus-tcp",
	Label: "Modbus TCP",
	Factory: func(tunnel string, conn connect.Conn, opts types.Options) (device.Adapter, error) {
		adapter := &Adapter{
			modbus: NewTCP(conn, opts),
		}
		err := adapter.start(tunnel, opts)
		if err != nil {
			return nil, err
		}
		return adapter, nil
	},
	Options: options,
	Mappers: mappers,
	Pollers: pollers,
}

type Modbus interface {
	Read(station, code uint8, addr, size uint16) ([]byte, error)
	Write(station, code uint8, addr uint16, buf []byte) error
}

func init() {
	protocol.Register(modbusRtu)
	protocol.Register(modbusTCP)
}
