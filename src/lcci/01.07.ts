const rotate = (matrix: number[][]): number[][] => {
  const n = matrix.length
  const newMatrix: number[][] = Array.from({ length: n }, () => [])
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - i - 1] = matrix[i][j]
    }
  }
  return newMatrix
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const matrix2 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

console.log(rotate(matrix));
// console.log(rotate(matrix2));

export {}