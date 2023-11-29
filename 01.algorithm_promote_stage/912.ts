import { swap } from './utils'
// 排序数组

// 1.快速排序
const quickSort = (arr: number[]): number[] => {
  const partition = (left: number, right: number) => {
    if (left >= right) return
    const pivot = arr[right]
    let i = left
    let j = right - 1
    while (i < j) {  //左右指针无需相遇
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i < j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    swap(arr, i, right)
    partition(left, j)
    partition(i + 1, right)
  }
  partition(0, arr.length - 1)
  return arr
}

const arr = [4, 3, 2, 1, 5]
console.log(quickSort(arr));

// 2. 归并排序