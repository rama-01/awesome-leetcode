// 转换为二进制数
const dec2bin = (dec: number) => (dec >>> 0).toString(2)

const counts1 = (binary: string) => {
    let count = 0
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++
        }
    }
    return count
}

const solution = (n: number) => {
    let ans: Array<number> = []
    for (let i = 0; i <= n; i++) {
        const binary = dec2bin(i)
        ans.push(counts1(binary))
    }
    return ans
}

/* 标准答案 */
function countBits(n: number): number[] {
    const f: number[] = Array(n + 1).fill(0)
    for (let i = 1; i <= n; ++i) {
        f[i] = f[i & (i - 1)] + 1
    }
    return f
}

console.log(solution(5))

export {}
