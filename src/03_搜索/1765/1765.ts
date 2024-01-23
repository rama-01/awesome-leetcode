const highestPeak = (isWater: number[][]) => {
    const m = isWater.length,
        n = isWater[0].length,
        queue: Map<number, number[]>[] = [],
        visited: number[][] = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                isWater[i][j] = 0
                visited.push([i, j])
                queue.push(new Map().set(0, [i, j]))
            }
        }
    }
    const dirs: number[] = [-1, 0, 1, 0, -1]
    while (queue.length) {
        const q = queue.shift()!
        for (const [key, value] of q) {
            for (let k = 0; k < dirs.length - 1; k++) {
                const [x, y] = [value[0] + dirs[k], value[1] + dirs[k + 1]]
                if (x < 0 || x >= m || y < 0 || y >= n) continue
                if (!visited.find(([i, j]) => i === x && j === y)) {
                    isWater[x][y] = key + 1
                    visited.push([x, y])
                    queue.push(new Map().set(key + 1, [x, y]))
                }
            }
        }
    }
    return Math.max(...isWater.flat())
}

const isWater = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 0, 0]
]

console.log(highestPeak(isWater))
