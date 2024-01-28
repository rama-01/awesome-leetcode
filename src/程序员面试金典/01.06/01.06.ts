/* 字符串压缩，假定字符串只有大小写字母 */
const compressString = (str: string): string => {
  let newStr = ''
  const n = str.length
  let j = 0
  for (let i = 0; i < n; i++) {
    j++
    if (str[i] !== str[i + 1]) {
      newStr += str[i] + j
      j = 0
    }
  }
  if (newStr.length >= str.length) return str
  return newStr
}

console.log(compressString('aabcccccaaa'))
console.log(compressString("abbccd"));

export {}