const isUnique = (str: string): boolean =>
  Array.from(str).filter((item, index, array) => array.indexOf(item) === index)
    .length === str.length

// 不调用api，使用位运算
function isUnique2(astr: string): boolean {
  let mask = 0
  for (let j = 0; j < astr.length; ++j) {
    const i = astr.charCodeAt(j) - 'a'.charCodeAt(0)
    if ((mask >> i) & 1) {
      return false
    }
    mask |= 1 << i
  }
  return true
}
console.log(isUnique('abc'))
console.log(isUnique('abca'))
console.log(isUnique2('abc'))
console.log(isUnique2('abca'))

export {}
