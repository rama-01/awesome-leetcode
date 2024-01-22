/* 标准答案 */
const intervalMap = new Map<number, NodeJS.Timeout>()

function customInterval(fn: Function, delay: number, period: number): number {
    let count = 0
    function recursiveTimeout() {
        intervalMap.set(
            id,
            setTimeout(() => {
                fn()
                count++
                recursiveTimeout()
            }, delay + period * count)
        )
    }

    const id = Date.now()
    recursiveTimeout()
    return id
}

function customClearInterval(id: number) {
    if (intervalMap.has(id)) {
        clearTimeout(intervalMap.get(id)!)
        intervalMap.delete(id)
    }
}

const delay = 50,
    period = 20,
    stopTime = 225,
    fn = () => console.log('hello')

customInterval(fn, delay, period)

export {}
