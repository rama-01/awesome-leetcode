/* 双指针 */
const oneEditAway = (str1: string, str2: string): boolean => {
  const m = str1.length
  const n = str2.length
  if (Math.abs(m - n) > 1) return false  //这个判断条件可以省略，因为它可以被最后的判断条件所覆盖
  let i = 0
  let j = 0
  let count = 0
  while (i < m || j < n) {
    if (str1[i] !== str2[j]) {
      count++
      if (i < m && str1[i + 1] === str2[j]) {
        i++
      } else if (j < n && str1[i] === str2[j + 1]) {
        j++
      }
    }
    i++
    j++
  }
  return count <= 1
}

console.log(oneEditAway('pale','ple'));
console.log(oneEditAway('pales', 'ple'));

export {}
