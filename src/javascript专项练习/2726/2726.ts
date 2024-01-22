class Calculator {
    private result: number
    constructor(res: number) {
        this.result = res
    }
    get res() {
        //getter函数，直接作为属性访问
        return this.result
    }
    getResult() {
        return this.result
    }
    add(value: number): Calculator {
        this.result += value
        return this //返回更新后的Calculator对象，以便链式调用方法
    }
    subtract(value: number): Calculator {
        this.result -= value
        return this
    }
    multiply(value: number): Calculator {
        this.result *= value
        return this
    }
    divide(value: number): Calculator {
        if (value === 0) throw 'Division by zero is not allowed'
        this.result /= value
        return this
    }
    power(value: number): Calculator {
        this.result **= value
        return this
    }
}

const res: number = new Calculator(10).add(5).subtract(7).getResult()
const res2: number = new Calculator(10).add(5).subtract(7).res
console.log(res)
console.log(res2)

export {}
