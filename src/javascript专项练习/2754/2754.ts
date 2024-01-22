type Fn = (...args: any[]) => any

declare global {
    interface Function {
        bindPolyfill(obj: Record<any, any>): Fn
    }
}

Function.prototype.bindPolyfill = function (obj: Record<any, any>): Fn {
    return (...args) => this.call(obj, ...args)
}

/* 如果不使用任何内置方法呢？ */

function f() {
    console.log(this.a)
}

const bindFn = f.bindPolyfill({ a: 1 })

bindFn()

export {}
