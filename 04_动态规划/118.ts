const generate = (numRows: number): number[][] => {
  const dp: number[][] = []
  dp[0] = [1]
  if (numRows === 1) return dp
  dp[1] = [1, 1]
  if (numRows === 2) return dp
  // 定义状态转移方程
  for (let i = 2; i < numRows; i++) {
    // dp[i-1]数组长度为i
    // 定义一个指针
    let k = 0
    // 定义状态转移方程
    const n = dp[i - 1].length
    dp[i] = new Array<number>(n + 1)
    while (k < n - 1) {
      dp[i][0] = dp[i][n] = 1
      dp[i][k + 1] = dp[i - 1][k] + dp[i - 1][k + 1]
      k++
    }
  }
  return dp
}

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));