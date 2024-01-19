declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][]
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) return []
  const ans = Array.from({ length: rowsCount }, () => Array(colsCount))
  // #region
  // for (let i = 0; i < rowsCount; i++) {
  //   let k = i
  //   for (let j = 0; j < colsCount; j++) {
  //     if (j > i) {
  //       if (j % 2 === 0) {
  //         k += 1
  //       } else {
  //         k += 2 * rowsCount - 1
  //       }
  //     }
  //     ans[i][j] = this[k]
  //   }
  // }
  // return ans
  // #endregion
  for (let h = 0, i = 0, j = 0, k = 1; h < this.length; ++h) {
    ans[i][j] = this[h]
    i += k
    if (i === rowsCount || i === -1) {
      i -= k
      k = -k
      ++j
    }
  }
  return ans
}

const nums = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15
]
const rowsCount = 5
const colsCount = 4
console.log(nums.snail(rowsCount, colsCount))

export {}
