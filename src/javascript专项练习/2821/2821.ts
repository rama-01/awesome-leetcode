/* 延迟每个promise对象的解析 */
const delayAllPromises = (functions: Function[], ms: number) => functions.map((fn) => new Promise((resolve) => setTimeout(resolve, ms)).then(() => fn()))

/* 标准答案 */
function delayAll(functions: Function[], ms: number): Function[] {
    return functions.map((fn) => {
        return async function () {
            await new Promise((resolve) => setTimeout(resolve, ms))
            return fn()
        }
    })
}

const functions = [() => new Promise((resolve) => setTimeout(resolve, 50)), () => new Promise((resolve) => setTimeout(resolve, 80))],
    ms = 70

const res = delayAllPromises(functions, ms)
console.log(res)

export {}
