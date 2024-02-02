const validPalindrome = (str: string) => {
    let delCount = 0
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        if (delCount > 1) return false
        if (str.charAt(l) !== str.charAt(r)) {
            delCount++
            if (str.charAt(++l) === str.charAt(r)) continue
            if (str.charAt(--l) === str.charAt(--r)) continue
            if (str.charAt(++l) !== str.charAt(++r) && str.charAt(--l) !== str.charAt(--r)) return false
        }
    }
    return true
}

/* standard answer */
function validPalindrome2(s: string): boolean {
    const check = (i: number, j: number): boolean => {
        for (; i < j; ++i, --j) {
            if (s[i] !== s[j]) {
                return false
            }
        }
        return true
    }
    for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
        if (s[i] !== s[j]) {
            return check(i + 1, j) || check(i, j - 1)
        }
    }
    return true
}

const s = 'abc'
console.log(validPalindrome(s))

export {}
