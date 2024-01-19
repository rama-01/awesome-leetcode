type MultiDimensionalArray = (number | MultiDimensionalArray)[]
const flat = (arr: MultiDimensionalArray, n: number) => {
  if (n <= 0) {
    return arr
  }
  const ans: MultiDimensionalArray = []
  for (const item of arr) {
    // 判断元素是否为数组，如果是，则递归调用函数；否则直接返回它
    if (Array.isArray(item)) {
      ans.push(...flat(item, n - 1))
    } else {
      ans.push(item)
    }
  }
  return ans
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(arr,2));
