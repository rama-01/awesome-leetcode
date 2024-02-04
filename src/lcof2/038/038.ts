export const waitDays = (temperatures: Array<number>) => {
    let ans: Array<number> = []
    for (let i = 0, n = temperatures.length; i < n; i++) {
        let end = i
        while (end < n - 1 && temperatures[++end] < temperatures[i]) {}
        if (temperatures[end] < temperatures[i]) {
            ans.push(0)
        } else {
            ans.push(end - i)
        }
    }
    return ans
}

/* standard answer */
// 单调栈模型
// 1.倒序
function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length
    const res = new Array(n)
    const stack = []
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop()
        }
        res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i
        stack.push(i)
    }
    return res
}

// 2.正序
function dailyTemperatures2(temperatures: number[]): number[] {
    const n = temperatures.length
    const res = new Array(n).fill(0)
    const stack = []
    for (let i = 0; i < n; i++) {
        const temperature = temperatures[i]
        while (stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperature) {
            const j = stack.pop()
            res[j] = i - j
        }
        stack.push(i)
    }
    return res
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(waitDays(temperatures))
