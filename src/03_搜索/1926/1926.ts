const nearestExit = (maze: Array<Array<string>>, entrance: [number, number]) => {
    const m = maze.length
    const n = maze[0].length
    const queue: Array<[number, number]> = []
    const visited: Array<[number, number]> = [entrance]
    queue.push(entrance)
    const dirs = [-1, 0, 1, 0, -1]
    let ans = 0
    while (queue.length) {
        const q = queue.shift()!
        for (let i = 0; i < dirs.length - 1; i++) {
            const [x, y] = [q[0] + dirs[i], q[1] + dirs[i + 1]]
            if (x < 0 || x >= m || y < 0 || y >= n) continue
            if (maze[x][y] === '.') {
                // 如果第一轮搜索就触及了边界条件，中止循环
                if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
                    return ans
                } else if (!visited.find((j) => j[0] === x && j[1] === y)) {
                    visited.push([x, y])
                    queue.push([x, y])
                }
            }
        }
        ans++
    }
    return -1
}

const maze = [['.', '+']],
    entrance = [0, 0] as [number, number]
console.log(nearestExit(maze, entrance))
