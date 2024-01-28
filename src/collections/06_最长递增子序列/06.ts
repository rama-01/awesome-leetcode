function lengthOfLIS(nums: number[]): number {
    const dp: number[] = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp, 0)
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const result = lengthOfLIS(nums)
console.log(result) // 输出最长上升子序列的长度

export {}
