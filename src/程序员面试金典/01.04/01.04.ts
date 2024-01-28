const strToMap = (str: string): Map<string, number> => {
  const map = new Map()
  Array.from(str).forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  return map
}

const canPermutePalindrome = (str: string): boolean => {
  const values = strToMap(str).values() //返回一个迭代器对象
  if (str.length % 2 === 0) {
    for (const value of values) {
      if (value % 2 !== 0) return false
    }
    return true
  } else {
    //长度为奇数，则values中只能有一个奇数，其余均为偶数次
    let oddTimes = 0 //奇数出现次数
    for (const value of values) {
      if (value % 2 !== 0) {
        oddTimes++
        if (oddTimes > 1 || value !== 1) return false
      }
    }
    return true
  }
}

/* 标准答案 */
// 判断逻辑是次数为奇数的字符不能超过2次，其余情况返回true
function canPermutePalindrome2(s: string): boolean {
  const set = new Set<string>()
  for (const c of s) {
    if (set.has(c)) {
      set.delete(c)
    } else {
      set.add(c)
    }
  }
  return set.size <= 1
}

console.log(canPermutePalindrome('tactcoa'))
