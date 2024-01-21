function* cycleGenerator<T>(arr: T[], steps: number[], startIndex: number): Generator<unknown, void, unknown> {
    let currentIndex: number = 0
    let i: number = 0
    const n = arr.length
    while (i <= n) {
        currentIndex += i === 0 ? startIndex : steps[i - 1]
        currentIndex %= n
        if (currentIndex < 0) {
            yield arr[currentIndex + n]
        } else {
            yield arr[currentIndex]
        }
        i++
    }
}

/* 标准答案,steps应该手动传入函数 */
function* cycleGenerator2(arr: number[], startIndex: number): Generator<number, void, number> {
    const n = arr.length
    while (true) {
        const jump = yield arr[startIndex]
        startIndex = (((startIndex + jump) % n) + n) % n  //再加上n，%n是为了转换负值索引
    }
}

// const arr = [1, 2, 3, 4, 5],
//     steps = [1, 2, 6],
//     startIndex = 0
const arr = [10, 11, 12, 13, 14, 15],
    steps = [1, 4, 0, -1, -3],
    startIndex = 1

const gen = cycleGenerator2(arr, startIndex)
console.log(gen.next().value)
console.log(gen.next(1).value)
console.log(gen.next(4).value)
console.log(gen.next(0).value)
console.log(gen.next(-1).value)
console.log(gen.next(-3).value)

export {}
