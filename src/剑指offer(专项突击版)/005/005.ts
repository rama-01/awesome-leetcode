const maxProduct = (words: Array<string>) => {
    const t = words.map((i) => ({ word: i, length: i.length }))
    words = t.sort((a, b) => b.length - a.length).map((j) => j.word)
    for (let i = 0, n = words.length; i < n - 1; i++) {
        outerLoop: for (let j = i + 1; j < n; j++) {
            let isUnique: boolean = true
            for (let k = 0, m = words[j].length; k < m; k++) {
                if (words[i].includes(words[j][k])) {
                    isUnique = false
                    break outerLoop
                }
            }
            if (isUnique) {
                return words[i].length * words[j].length
            }
        }
    }
    return 0
}

/* 标准答案：位运算，枚举 */
function maxProduct2(words: string[]): number {
    const n = words.length
    const mask: number[] = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        for (const c of words[i]) {
            mask[i] |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
        }
    }
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if ((mask[i] & mask[j]) === 0) {
                ans = Math.max(ans, words[i].length * words[j].length)
            }
        }
    }
    return ans
}

const words = ['a', 'aa', 'aaa', 'aaaa']
console.log(maxProduct(words))

export {}
