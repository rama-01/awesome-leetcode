const findLongestIncreasingSubsequence = (arr: number[]) => {
  let dp: number[][] = []
  dp[0] = [arr[0]]
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const res = [...dp[i - 1], arr[i]].sort((a, b) => a - b)
    const index = res.findIndex(item => item === arr[i])
    // 判断索引的不同情况
    dp[i] = res.slice(0, index + 1)
  }
  return dp[n - 1]
}

const nums = [0, 1, 0, 3, 2, 3]
console.log(findLongestIncreasingSubsequence(nums));