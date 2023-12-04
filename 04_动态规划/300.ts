const lengthOfLongestIncreasingSubsequence = (nums: number[]) => {
  // 维护一个dp数组，其中dp[i]表示以nums[i]结尾的最长递增子序列
  const dp: number[] = []
  const n = nums.length
  for (let i = 0; i < n; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j])
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return Math.max(...dp)
}

const nums = [0, 1, 0, 3, 2, 3]
console.log(lengthOfLongestIncreasingSubsequence(nums));


// 问题一： 如果是返回所有可能的最长递增子序列呢
const lengthOfLIS = (nums: number[]) => {
  const n = nums.length
  const dp: number[][] = new Array(n)
  dp[0] = [nums[0]]
  for (let i = 1; i < n; i++) {
    // 
  }
}