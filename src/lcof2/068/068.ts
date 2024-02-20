/* O(n) */
export const findInsertPosition = (nums: number[], target: number) => {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (target <= nums[i]) {
            return i
        }
    }
    return n
}

/* O(log n) */
export const findInsertPosition2 = (nums: number[], target: number) => {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

const nums = [1,3,5,6], target = 7
console.log(findInsertPosition(nums, target))
