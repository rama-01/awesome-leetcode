import { swap, testSort } from 'hy-algokit'
// 排序数组

// 1.快速排序
const quickSort = (arr: number[]): number[] => {
  const partition = (left: number, right: number) => {
    if (left >= right) return
    const pivot = arr[right]
    let i = left
    let j = right - 1
    while (i <= j) {  //左右指针无需相遇
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
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

testSort(quickSort)

// 2. 归并排序
const mergeSort = (arr: number[]): number[] => {
  // 递归的中止条件，数组只有一个元素
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const l = arr.slice(0, mid)
  const r = arr.slice(mid)
  const nl = mergeSort(l)
  const nr = mergeSort(r)
  // 定义双指针
  let i = 0, j = 0
  const res: number[] = []
  while (i < nl.length && j < nr.length) {
    if (nl[i] <= nr[j]) {
      res.push(nl[i])
      i++
    } else {
      res.push(nr[j])
      j++
    }
  }
  // 处理可能剩余的元素
  if (i < nl.length) {
    res.push(...nl.slice(i))
  }
  if (j < nr.length) {
    res.push(...nr.slice(j))
  }
  return res
}

testSort(mergeSort)