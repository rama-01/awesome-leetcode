/* 和大于等于 target 的最短子数组 */
const minSubArrayLength = (nums: Array<number>, target: number) => {
    let minLength = Infinity
    let left = 0,
        sum = 0
    for (let right = 0, n = nums.length; right < n; right++) {
        sum += nums[right]
        while (sum >= target) {
            //尝试缩小滑动窗口，移动左指针
            minLength = Math.min(minLength, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLength === 0 ? 0 : minLength
}

/* 标准答案 */
function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length
    const inf = 1 << 30
    let ans = inf
    let s = 0
    for (let i = 0, j = 0; j < n; ++j) {
        s += nums[j]
        while (s >= target) {
            ans = Math.min(ans, j - i + 1)
            s -= nums[i++]
        }
    }
    return ans === inf ? 0 : ans
}

const target = 4,
    nums = [1, 4, 4]
console.log(minSubArrayLength(nums, target))

export {}
