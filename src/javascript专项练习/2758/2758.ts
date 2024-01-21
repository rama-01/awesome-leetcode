declare global {
    interface Date {
        nextDay(): string
    }
}

Date.prototype.nextDay = function () {
    const date = new Date(this.valueOf()) 
    date.setDate(date.getDate() + 1)
    return date.toISOString().slice(0, 10)
    //这里date可以直接指向函数调用者-实例自身，即this
    // this.setDate(this.getDate() + 1)
    // return this.toISOString().slice(0, 10)
}

const date = new Date('2014-06-20')
console.log(date.nextDay())
// "2014-06-21"

export {}
