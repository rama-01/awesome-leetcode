const setZeroMatrix = (matrix: number[][]) => {
  const m = matrix.length
  const n = matrix[0].length
  const newMatrix = Array.from({ length: m }, () => new Array(n).fill(0))
  let rows: Set<number> = new Set()
  let cols: Set<number> = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!rows.has(i) && !cols.has(j)) {
        newMatrix[i][j] = matrix[i][j]
      }
    }
  }
  return newMatrix
}

/* 标准答案1 */
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  const rows = new Array(m).fill(false)
  const cols = new Array(n).fill(false)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true
        cols[j] = true
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }
}

/* 标准答案2 */


const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]

const matrix2 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

console.log(setZeroMatrix(matrix))
console.log(setZeroMatrix(matrix2))
