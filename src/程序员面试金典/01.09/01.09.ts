const isFlipedString = (str1: string, str2: string): boolean => {
  const m = str1.length
  const n = str2.length
  if (m !== n) return false
  const combinations: string[] = [] //轮转字符串的可能组合
  for (let i = 0; i < m; i++) {
    combinations.push(str1.slice(i + 1) + str1.slice(0, i + 1))
  }
  if (combinations.find((i) => i === str2)) return true
  return false
}

/* 标准答案 */
// '其次，如果字符串 s1 和 s2 长度相等，那么将两个 s1 连接，得到的 s1+s1 这个字符串一定包含了 s1 旋转的所有情况，这时候我们只要判断 s2 是否是 s1+s1 的子串即可。'
function isFlipedString2(s1: string, s2: string): boolean {
  return s1.length === s2.length && (s2 + s2).indexOf(s1) !== -1;
}

const s1 = 'waterbottle',
  s2 = 'erbottlewat'

console.log(isFlipedString(s1,s2));

export {}
