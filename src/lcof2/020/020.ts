/* the count of substring palindrome */

// 1.judge string is palindrome or not
const isPalindrome = (str: string) => {
    // handle single string
    if (str.length === 1) return true
    for (let l = 0, r = str.length - 1; l < r; l++, r--) {
        if (str[l] !== str[r]) return false
    }
    return true
}

// 2. count palindrome substring
const countPalindromeSubstring = (str: string) => {
    let ans = 0
    for (let win = 1, len = str.length; win <= len; win++) {
        for (let l = 0; l <= len - win; l++) {
            if (isPalindrome(str.slice(l, l + win))) {
                ans++
            }
        }
    }
    return ans
}

const s = 'abc'
console.log(countPalindromeSubstring(s))

export {}
