type F = (x: number) => number
const compose = (funcs: F[], x: number) => {
    let acc = x
    for (let i = funcs.length - 1; i >= 0; i--) {
        const fn = funcs[i]
        acc = fn(acc)
    }
    return acc
}

const compose2 = (funcs: F[], x: number) => {
    return funcs.reduceRight((acc, fn) => fn(acc), x)
}

const functions = [(x: number) => 10 * x, (x: number) => 10 * x, (x: number) => 10 * x]
const x = 1
console.log(compose(functions, x))
console.log(compose2(functions, x))

export {}
