const findMinPathSum = (grid: number[][]) => {
  const m = grid.length
  const n = grid[0].length
  // f维护一个二维数组
  const f: number[][] = Array(m).fill(0).map(_ => Array(n).fill(0))
  // 定义初始状态
  f[0][0] = grid[0][0]
  // 列出状态转移方程
  // 1. j=0,n=1
  for (let i = 1; i < m; i++) {
    f[i][0] = f[i - 1][0] + grid[i][0]
  }
  // 2. i=0,m=1
  for (let j = 1; j < n; j++) {
    f[0][j] = f[0][j - 1] + grid[0][j]
  }
  // 3. i!=0,j!=0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j]
    }
  }
  return f[m - 1][n - 1]
}

const grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
console.log(findMinPathSum(grid));
const grid2 = [[1, 2, 3], [4, 5, 6]]
console.log(findMinPathSum(grid2));
const grid3 = [[3]]
console.log(findMinPathSum(grid3));

export {}