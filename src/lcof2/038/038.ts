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

const temperatures = [30,60,90]
console.log(waitDays(temperatures))
