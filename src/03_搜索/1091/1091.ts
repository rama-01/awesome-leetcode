const shortestPath = (matrix: Array<Array<number>>) => {
    const m = matrix.length
    const n = matrix[0].length
    const queue: Array<Map<number, [number, number]>> = []
    const dirs = [1, -1, 0, 1, 1, 0, -1, -1, 1]
    queue.push(new Map().set(1, [0, 0]))
    const visited: number[][] = [[0, 0]]
    while (queue.length) {
        const q = queue.shift()!
        for (const [key, value] of q) {
            if (value[0] === m - 1 && value[1] === n - 1) return key //思考，这里返回的为什么一定是最短路径？
            for (let k = 0; k < dirs.length - 1; k++) {
                const [x, y] = [value[0] + dirs[k], value[1] + dirs[k + 1]]
                if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] === 0 && !visited.find((i) => i[0] === x && i[1] === y)) {
                    visited.push([x, y])
                    queue.push(new Map().set(key + 1, [x, y]))
                }
            }
        }
    }
    return -1
}

/* 标准答案 */
function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0]) {
        return -1
    }
    const n = grid.length
    grid[0][0] = 1
    let q: number[][] = [[0, 0]]
    for (let ans = 1; q.length > 0; ++ans) {
        const nq: number[][] = []
        for (const [i, j] of q) {
            if (i === n - 1 && j === n - 1) {
                return ans
            }
            for (let x = i - 1; x <= i + 1; ++x) {
                for (let y = j - 1; y <= j + 1; ++y) {
                    if (x >= 0 && x < n && y >= 0 && y < n && !grid[x][y]) {
                        grid[x][y] = 1
                        nq.push([x, y])
                    }
                }
            }
        }
        q = nq
    }
    return -1
}

const grid = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ],
    grid2 = [
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 0]
    ]

const res = shortestPath(grid2)
console.log(res)

export {}
