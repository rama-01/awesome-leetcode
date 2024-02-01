const isPalindrome = (str: string) => {
    str = str.toLowerCase()
    const pattern = /^[0-9a-zA-Z]$/
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        while (!pattern.test(str.charAt(l))) {
            l++
        }
        while (!pattern.test(str.charAt(r))) {
            r--
        }
        if (l >= r) break
        if (str.charAt(l) !== str.charAt(r)) {
            return false
        }
    }
    return true
}

const s = "race a car"
console.log(isPalindrome(s))

export {}
