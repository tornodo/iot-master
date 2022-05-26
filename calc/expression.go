package calc

import (
	"github.com/antonmedv/expr"
	"github.com/antonmedv/expr/vm"
)

//Evaluate 计算
func Evaluate(ctx map[string]interface{}, input string) (float64, error) {
	eval, err := expr.Eval(input, ctx)
	if err != nil {
		return 0, err
	}
	return eval.(float64), nil
}

//Eval 计算
func Eval(ctx map[string]interface{}, input string) (interface{}, error) {
	return expr.Eval(input, ctx)
}

//Expression 表达式
type Expression struct {
	program *vm.Program
}

//NewExpression 编译
func NewExpression(input string) (*Expression, error) {
	program, err := expr.Compile(input)
	if err != nil {
		return nil, err
	}
	return &Expression{program: program}, nil
}

//Evaluate 计算
func (c *Expression) Evaluate(ctx map[string]interface{}) (float64, error) {
	eval, err := expr.Run(c.program, ctx)
	if err != nil {
		return 0, err
	}
	return eval.(float64), nil
}

//Eval 计算
func (c *Expression) Eval(ctx map[string]interface{}) (interface{}, error) {
	//TODO 引入数学计算函数
	return expr.Run(c.program, ctx)
}