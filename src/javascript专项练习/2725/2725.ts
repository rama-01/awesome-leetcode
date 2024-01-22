/* 间隔取消 */
const cancelLabel = (fn: (...args: any[]) => any, args: any[], t: number) => {
    fn(...args)
    const time = setInterval(() => fn(...args), t)
    return () => clearInterval(time)
}

const result:any[] = []

const fn = (x:number) => x * 2
const args = [4],
    t = 20,
    cancelT = 110

// const log = (...argsArr) => {
//     result.push(fn(...argsArr))
// }

const cancel = cancelLabel(fn, args, t)

setTimeout(() => {
    cancel()
    console.log(result) // [
    //      {"time":0,"returned":8},
    //      {"time":20,"returned":8},
    //      {"time":40,"returned":8},
    //      {"time":60,"returned":8},
    //      {"time":80,"returned":8},
    //      {"time":100,"returned":8}
    //  ]
}, cancelT)

export {}
