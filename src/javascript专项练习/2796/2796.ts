const replicate = (str: string, times: number): string => {
    let ans = ''
    let i = 0
    while (i < times) {
        ans += str
        i++
    }
    return ans
}

/* 标准答案 */
// 实际重写了数组replicate方法
declare global {
    interface String {
        replicate(times: number): string
    }
}

String.prototype.replicate = function (times: number) {
    return new Array(times).fill(this).join('')
}

// console.log(replicate('hello', 3))
console.log('hello'.replicate(3));


export {}
