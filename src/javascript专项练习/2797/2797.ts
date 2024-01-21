type Fn = (...args: any[]) => any

const partial = (fn: Fn, args: any[]) => {
    return (...restArgs: any[]) => {
        let isRep = false
        let j = 0
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '_') {
                isRep = true
                args[i] = restArgs[j++]
            }
        }
        if (!isRep) {
            args = args.concat(restArgs)
        } else if (j <= restArgs.length - 1) {
            args = args.concat(restArgs.slice(j))
        }
        return fn(...args)
    }
}

/* 标准答案 */
/* function partial2(fn: Function, args: any[]): Function {
    return function (...restArgs: any[]) {
        let i = 0
        for (let j = 0; j < args.length; ++j) {
            if (args[j] === '_') {
                args[j] = restArgs[i++]
            }
        }
        while (i < restArgs.length) {
            args.push(restArgs[i++])
        }
        return fn(...args)
    }
} */

const fn = (a: number, b: number, c: number) => b + a - c,
    args = ['_', 5],
    restArgs = [5, 20]
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // [1,2,3,4,5,6]

export {}
