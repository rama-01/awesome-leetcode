const validPalindrome = (str: string) => {
    let delCount = 0
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        if (delCount > 1) return false
        if (str.charAt(l) !== str.charAt(r)) {
            delCount++
            if (str.charAt(++l) === str.charAt(r)) {
                continue
            }
            if (str.charAt(--l) === str.charAt(--r)) {
                continue
            }
            if (str.charAt(++l) !== str.charAt(++r) && str.charAt(--l) !== str.charAt(--r)) {
                return false
            }
        }
    }
    return true
}

const s = 'abc'
console.log(validPalindrome(s))

export {}
