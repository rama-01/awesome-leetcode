export function combine(n: number, k: number): number[][] {
    const result: number[][] = []
    const temp: number[] = []

    function dfs(start: number) {
        if (temp.length === k) {
            result.push([...temp])
            return
        }

        for (let i = start; i <= n; i++) {
            temp.push(i)
            dfs(i + 1)
            temp.pop()
        }
    }

    dfs(1)
    return result
}

// 测试
const n = 4
const k = 2
console.log(combine(n, k))
