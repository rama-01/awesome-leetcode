// 在排序数组中查找元素的第一个和最后一个位置
// O(logN)

// 1. 复习二分查找
const searchBinary = (arr: number[], target: number): number => {
  let left = 0, right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

const findRange = (nums: number[], target: number): number[] => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {  //找到了目标元素
      // 引入双指针，分别向左、向右移动
      let i = mid - 1, j = mid + 1
      while (nums[i] === target && i >= 0) {
        i -= 1
      }
      while (nums[j] === target && j >= 0) {
        j += 1
      }
      return [i + 1, j - 1]
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return [-1, -1]
}

const nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(findRange(nums, target));