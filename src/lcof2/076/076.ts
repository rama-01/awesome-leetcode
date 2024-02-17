import { swap } from '../../utils'

/* 直接使用js api */
export const kBiggestNumber1 = (nums: Array<number>, k: number) => nums.sort((a, b) => b - a)[k - 1]

/* 快速排序 */
// 1.复习快速排序
export const quickSort = (nums: Array<number>) => {
    const partition = (left: number, right: number) => {
        if (left >= right) return
        const pivot = nums[right]
        let l = left,
            r = right - 1
        while (l <= r) {
            while (arr[l] < pivot) {
                l++
            }
            while (arr[r] > pivot) {
                r--
            }
            if (l <= r) {
                swap(nums, l, r)
                l++
                r--
            }
        }
        swap(nums, l, right)
        partition(left, r)
        partition(l + 1, right)
    }
    partition(0, nums.length - 1)
    return nums
}

// modify quick sort algorithm
export const kBiggestNumber2 = (nums: Array<number>, k: number) => {
    function partition(left: number, right: number) {
        if (left >= right) return
        const pivot = nums[right]
        let l = left,
            r = right - 1
        while (l <= r) {
            while (arr[l] > pivot) {
                l++
            }
            while (arr[r] < pivot) {
                r--
            }
            if (l <= r) {
                swap(nums, l, r)
                l++
                r--
            }
        }
        swap(nums, l, right)
        partition(left, r)
        partition(l + 1, right)
    }
    partition(0, nums.length - 1)
    return nums[k - 1]
}

const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k = 3
console.log(kBiggestNumber2(arr, k))
