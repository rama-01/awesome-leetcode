const lengthOfLongestSubstring = (str: string) => {
    let ans: number = 1
    for (let i = 0, n = str.length; i < n - 1; i++) {
        let j = i + 1
        while (!str.slice(i, j).includes(str[j]) && j < n) {
            ans = Math.max(ans, j - i + 1)
            j++
        }
    }
    return ans
}

const s = "bbbbb"
console.log(lengthOfLongestSubstring(s))

export {}