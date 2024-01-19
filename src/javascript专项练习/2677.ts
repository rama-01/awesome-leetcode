/**
 * @param arr
 * @param size 正整数 >=1
 * @returns
 */
/* 定义双指针 */
const chunk2 = <T>(arr: T[], size: number) => {
  const m = Math.ceil(arr.length / size)
  const newArr: T[][] = Array.from({ length: m }, () => [])
  for (let i = 0, n = arr.length; i < n; i++) {
    newArr[Math.floor(i / size)].push(arr[i])
  }
  return newArr
}

const arr = [1, 9, 6, 3, 2],
  size = 3,
  size2 = 1,
  size3 = 4,
  size4 = 8
console.log(chunk2(arr, size))
console.log(chunk2(arr, size2))
console.log(chunk2(arr, size3))
console.log(chunk2(arr, size4))

/* 标准答案 */
//#region
/* const chunk = <T>(arr: T[], size: number) => {
  let ans: T[][] = []
  for (let i = 0, n = arr.length; i < n; i += size) {
    ans.push(arr.slice(i, i + size))
  }
  return ans
}

const arr = [1, 9, 6, 3, 2],
  size = 1
console.log(chunk(arr, size)) */
//#endregion

export {}
