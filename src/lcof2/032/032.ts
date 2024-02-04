const isAnagram = (s: string, t: string) => {
    const sLength = s.length,
        tLength = t.length,
        visited: Array<number> = []
    if (sLength !== tLength) return false
    for (let i = 0; i < sLength; i++) {
        for (let j = 0; j < tLength; j++) {
            if (s[i] === t[j] && !visited.includes(j)) {
                visited.push(j)
            }
        }
    }
    // 判断字符顺序完全相同 => visited array item 严格递增
    const isIncreasingList = (arr: Array<number>) => {
        for (let k = 0, v = visited.length; k < v - 1; k++) {
            if (visited[k] > visited[k + 1]) return false
        }
        return true
    }

    if (visited.length === sLength && !isIncreasingList(visited)) {
        return true
    }
    return false
}

/* standard answer  */
function isAnagram2(s: string, t: string): boolean {
    const m = s.length
    const n = t.length
    if (m !== n || s === t) {
        return false
    }
    const cnt: number[] = new Array(26).fill(0)
    for (let i = 0; i < m; ++i) {
        ++cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]
        --cnt[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    return cnt.every((x) => x === 0)
}

const s = 'rat',
    t = 'car'
console.log(isAnagram(s, t))

export default isAnagram
