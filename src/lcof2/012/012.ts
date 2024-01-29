const solution = (nums: number[]) => {
    const sum = nums.reduce((pre, cur) => pre + cur)
    let leftSum = 0
    for (let i = 0, n = nums.length; i < n; i++) {
        if (leftSum === (sum - nums[i]) / 2) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
}

const nums = [2, 1, -1]
console.log(solution(nums))

/* 标准答案 */
function pivotIndex(nums: number[]): number {
    let left = 0
    let right = nums.reduce((a, b) => a + b, 0)
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        right -= nums[i]
        if (left === right) {
            return i
        }
        left += nums[i]
    }
    return -1
}

export { }

