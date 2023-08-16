package model

import (
	"errors"
	"fmt"
	"github.com/zgwit/iot-master/v3/pkg/bin"
	"github.com/zgwit/iot-master/v3/pkg/convert"
	"math"
	"strings"
)

// DataType 数据类型
type DataType int

const (
	//TypeNONE 空类型
	TypeNONE DataType = iota
	TypeBIT
	TypeBYTE
	TypeWORD
	TypeDWORD
	TypeQWORD
	TypeSHORT
	TypeINTEGER
	TypeLONG
	TypeFLOAT
	TypeDOUBLE
)

// Parse 解析类型
func (dt *DataType) Parse(tp string) error {
	//var *dt DataType
	tp = tp[1 : len(tp)-1]
	//strings.ToLower(tp)
	switch strings.ToLower(tp) {
	case "none":
		*dt = TypeNONE
	case "bit":
		*dt = TypeBIT
	case "byte":
		*dt = TypeBYTE
	case "word":
		fallthrough
	case "uint16":
		*dt = TypeWORD
	case "dword":
		fallthrough
	case "uint32":
		*dt = TypeDWORD
	case "qword":
		fallthrough
	case "uint64":
		*dt = TypeQWORD
	case "short":
		fallthrough
	case "int16":
		*dt = TypeSHORT
	case "integer":
		fallthrough
	case "int32":
		fallthrough
	case "int":
		*dt = TypeINTEGER
	case "long":
		fallthrough
	case "int64":
		*dt = TypeLONG
	case "float":
		*dt = TypeFLOAT
	case "double":
		fallthrough
	case "float64":
		*dt = TypeDOUBLE
	default:
		return fmt.Errorf("Unknown data type: %s ", tp)
	}
	return nil
}

// String 转化成字符串
func (dt *DataType) String() string {
	var str string
	switch *dt {
	case TypeBIT:
		str = "bit"
	case TypeBYTE:
		str = "byte"
	case TypeWORD:
		str = "word"
	case TypeDWORD:
		str = "dword"
	case TypeQWORD:
		str = "qword"
	case TypeSHORT:
		str = "short"
	case TypeINTEGER:
		str = "integer"
	case TypeLONG:
		str = "long"
	case TypeFLOAT:
		str = "float"
	case TypeDOUBLE:
		str = "double"
	default:
		str = "none"
	}
	return str
}

func (dt *DataType) Default() interface{} {
	switch *dt {
	case TypeBIT:
		return false
	case TypeBYTE:
		return byte(0)
	case TypeWORD:
		return uint16(0)
	case TypeDWORD:
		return uint32(0)
	case TypeQWORD:
		return uint64(0)
	case TypeSHORT:
		return int16(0)
	case TypeINTEGER:
		return int32(0)
	case TypeLONG:
		return int64(0)
	case TypeFLOAT:
		return float32(0)
	case TypeDOUBLE:
		return float64(0)
	default:
		return 0
	}
}

func (dt *DataType) Normalize(val interface{}) interface{} {
	switch *dt {
	case TypeBIT:
		return convert.ToBool(val)
	case TypeBYTE:
		return convert.ToUint8(val)
	case TypeWORD:
		return convert.ToUint16(val)
	case TypeDWORD:
		return convert.ToUint32(val)
	case TypeQWORD:
		return convert.ToUint64(val)
	case TypeSHORT:
		return convert.ToInt16(val)
	case TypeINTEGER:
		return convert.ToInt32(val)
	case TypeLONG:
		return convert.ToInt64(val)
	case TypeFLOAT:
		return convert.ToFloat32(val)
	case TypeDOUBLE:
		return convert.ToFloat64(val)
	default:
		return 0
	}
}

// Size 宽度
func (dt *DataType) Size() int {
	var s int
	switch *dt {
	case TypeBIT:
		s = 1
	case TypeBYTE:
		s = 1
	case TypeWORD:
		s = 2
	case TypeDWORD:
		s = 4
	case TypeQWORD:
		s = 8
	case TypeSHORT:
		s = 2
	case TypeINTEGER:
		s = 4
	case TypeLONG:
		s = 8
	case TypeFLOAT:
		s = 4
	case TypeDOUBLE:
		s = 8
	default:
		s = 1
	}
	return s
}

// Encode 编码
func (dt *DataType) Encode(value interface{}, le bool, precision int) []byte {
	buf := make([]byte, 8)
	switch *dt {
	case TypeBIT:
		if convert.ToBool(value) {
			buf[0] = 1 //?????
		} else {
			buf[0] = 0
		}
	case TypeBYTE:
		buf[0] = convert.ToUint8(value)
	case TypeWORD:
		var val uint16
		if precision > 0 {
			val = uint16(convert.ToFloat64(value) * math.Pow10(precision))
		} else {
			val = convert.ToUint16(value)
		}
		if le {
			bin.WriteUint16LittleEndian(buf, val)
		} else {
			bin.WriteUint16(buf, val)
		}
	case TypeDWORD:
		var val uint32
		if precision > 0 {
			val = uint32(convert.ToFloat64(value) * math.Pow10(precision))
		} else {
			val = convert.ToUint32(value)
		}
		if le {
			bin.WriteUint32LittleEndian(buf, val)
		} else {
			bin.WriteUint32(buf, val)
		}
	case TypeQWORD:
		var val uint64
		if precision > 0 {
			val = uint64(value.(float64) * math.Pow10(precision))
		} else {
			val = convert.ToUint64(value)
		}
		if le {
			bin.WriteUint64LittleEndian(buf, val)
		} else {
			bin.WriteUint64(buf, val)
		}
	case TypeSHORT:
		var val int16
		if precision > 0 {
			val = int16(convert.ToFloat64(value) * math.Pow10(precision))
		} else {
			val = convert.ToInt16(value)
		}
		if le {
			bin.WriteUint16LittleEndian(buf, uint16(val))
		} else {
			bin.WriteUint16(buf, uint16(val))
		}
	case TypeINTEGER:
		var val int32
		if precision > 0 {
			val = int32(convert.ToFloat64(value) * math.Pow10(precision))
		} else {
			val = convert.ToInt32(value)
		}
		if le {
			bin.WriteUint32LittleEndian(buf, uint32(val))
		} else {
			bin.WriteUint32(buf, uint32(val))
		}
	case TypeLONG:
		var val int64
		if precision > 0 {
			val = int64(convert.ToFloat64(value) * math.Pow10(precision))
		} else {
			val = convert.ToInt64(value)
		}
		if le {
			bin.WriteUint64LittleEndian(buf, uint64(val))
		} else {
			bin.WriteUint64(buf, uint64(val))
		}
	case TypeFLOAT:
		val := convert.ToFloat32(value)
		if le {
			bin.WriteFloat32LittleEndian(buf, val)
		} else {
			bin.WriteFloat32(buf, val)
		}
	case TypeDOUBLE:
		val := convert.ToFloat64(value)
		if le {
			bin.WriteFloat64LittleEndian(buf, val)
		} else {
			bin.WriteFloat64(buf, val)
		}
	default:
		//TODO error
	}
	return buf[:dt.Size()]
}

// Decode 解码
func (dt *DataType) Decode(buf []byte, le bool, precision int) (val interface{}, err error) {
	//避免越界访问
	if len(buf) < dt.Size() {
		return nil, fmt.Errorf("长度不够")
	}

	switch *dt {
	case TypeBIT:
		if buf[0] > 0 {
			val = true
		} else {
			val = false
		}
	case TypeBYTE:
		val = buf[0]
	case TypeWORD:
		var value uint16
		if le {
			value = bin.ParseUint16LittleEndian(buf)
		} else {
			value = bin.ParseUint16(buf)
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeDWORD:
		var value uint32
		if le {
			value = bin.ParseUint32LittleEndian(buf)
		} else {
			value = bin.ParseUint32(buf)
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeQWORD:
		var value uint64
		if le {
			value = bin.ParseUint64LittleEndian(buf)
		} else {
			value = bin.ParseUint64(buf)
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeSHORT:
		var value int16
		if le {
			value = int16(bin.ParseUint16LittleEndian(buf))
		} else {
			value = int16(bin.ParseUint16(buf))
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeINTEGER:
		var value int32
		if le {
			value = int32(bin.ParseUint32LittleEndian(buf))
		} else {
			value = int32(bin.ParseUint32(buf))
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeLONG:
		var value int64
		if le {
			value = int64(bin.ParseUint64LittleEndian(buf))
		} else {
			value = int64(bin.ParseUint64(buf))
		}
		if precision > 0 {
			val = float64(value) / math.Pow10(precision)
		} else {
			val = value
		}
	case TypeFLOAT:
		if le {
			val = bin.ParseFloat32LittleEndian(buf)
		} else {
			val = bin.ParseFloat32(buf)
		}
	case TypeDOUBLE:
		if le {
			val = bin.ParseFloat64LittleEndian(buf)
		} else {
			val = bin.ParseFloat64(buf)
		}
	default:
		err = errors.New("未知的数据类型")
	}
	return
}

// MarshalJSON 序列化
func (dt *DataType) MarshalJSON() ([]byte, error) {
	return []byte(`"` + dt.String() + `"`), nil
}

// UnmarshalJSON 解析
func (dt *DataType) UnmarshalJSON(buf []byte) error {
	return dt.Parse(string(buf))
}
