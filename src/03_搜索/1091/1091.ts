const shortestPath = (matrix: Array<Array<number>>) => {
    const m = matrix.length
    const n = matrix[0].length
    const queue: Array<Map<number, [number, number]>> = []
    const dirs = [1, -1, 0, 1, 1, 0, -1, -1, 1]
    queue.push(new Map().set(1, [0, 0]))
    const visited: Array<Array<number>> = [[0, 0]]
    while (queue.length) {
        const q = queue.shift()!
        for (const [key, value] of q) {
            if (value[0] === m - 1 && value[1] === n - 1) return visited
            for (let k = 0; k < dirs.length - 1; k++) {
                const [x, y] = [value[0] + dirs[k], value[1] + dirs[k + 1]]
                if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] === 1) continue
                if (!visited.find((i) => i[0] === x && i[1] === y)) {
                    visited.push([x, y])
                    queue.push(new Map().set(key + 1, [x, y]))
                }
            }
        }
    }
    return -1
}

const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
]
const res = shortestPath(grid)
console.log(res)

export {}
