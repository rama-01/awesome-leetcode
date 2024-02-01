/* 判断一个字符串是否包含另一个字符串的所有字符 */
const isSubstring = (p: string, c: string) => {
    const visited: Array<number> = []
    let ans: boolean = false
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] === c[i] && !visited.includes(j)) {
                ans = true
                visited.push(j)
                break
            }
        }
        if (!ans) return false
    }
    if (visited.length === c.length) {
        return true
    }
    return false
}


