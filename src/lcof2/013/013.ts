class NumMatrix {
    private matrix: Array<Array<number>>
    constructor(matrix: Array<Array<number>>) {
        this.matrix = matrix
    }
    sumRegion(row1: number, col1: number, row2: number, col2: number) {
        let sum = 0
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j]
            }
        }
        return sum
    }
}

const numMatrix: NumMatrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
])

console.log(numMatrix.sumRegion(2, 1, 4, 3))
// return 8 (红色矩形框的元素总和)
console.log(numMatrix.sumRegion(1, 1, 2, 2))
// return 11 (绿色矩形框的元素总和)
console.log(numMatrix.sumRegion(1, 2, 2, 4))
// return 12 (蓝色矩形框的元素总和)

/* 标准答案 */
class NumMatrix2 {
    s: number[][]

    constructor(matrix: number[][]) {
        const m = matrix.length
        const n = matrix[0].length
        this.s = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.s[i][j] = this.s[i - 1][j] + this.s[i][j - 1] - this.s[i - 1][j - 1] + matrix[i - 1][j - 1]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.s[row2 + 1][col2 + 1] - this.s[row2 + 1][col1] - this.s[row1][col2 + 1] + this.s[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export {}
