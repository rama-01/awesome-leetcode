import { swap, testSort } from "hy-algokit"
const quickSortArr = (arr: number[][]): number[][] => {
  // 2.使arr数组按第一个元素排序
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i
    const newArr = arr[i]
    while (j >= 1 && newArr[0] < arr[j][0]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = newArr
  }
  return arr
}

const mergeIntervals = (arr: number[][]): number[][] => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i][0] > arr[i][1]) swap(arr[i], 0, 1)
  }
  return quickSortArr(arr)
  // console.log('res', res);
  // return arr
}
const intervals = [[6, 2], [3, 1]]
console.log(mergeIntervals(intervals))