/* 引-获取一个字符串的所有变位词 */
function permuteString(str: string): string[] {
    const result: string[] = []
    function permute(prefix: string, suffix: string) {
        if (!suffix.length) {
            result.push(prefix)
        } else {
            for (let i = 0; i < suffix.length; i++) {
                permute(prefix + suffix.charAt(i), suffix.substring(0, i) + suffix.substring(i + 1))
            }
        }
    }
    permute('', str)
    return result
}
/* 字符串中的变位词 */
const strToMap = (str: string): Map<string, number> => {
    const strMap = new Map()
    for (let i = 0; i < str.length; i++) {
        if (!strMap.has(str[i])) {
            strMap.set(str[i], 1)
        } else {
            strMap.set(str[i], strMap.get(str[i]) + 1)
        }
    }
    return strMap
}

const solution = (str1: string, str2: string) => {
    const n1 = str1.length,
        n2 = str2.length,
        map1 = strToMap(str1)
    let ans: boolean
    for (let i = 0; i < n2 - n1 + 1; i++) {
        for (const [key, value] of strToMap(str2.slice(i, n1 + i)).entries()) {
            if (map1.has(key) && map1.get(key) === value) {
                ans = true
            } else {
                ans = false
                break
            }
        }
        if (ans!) return true
    }
    return false
}

const s1= "ab", s2 = "eidboaoo"
console.log(solution(s1, s2))

export {}
