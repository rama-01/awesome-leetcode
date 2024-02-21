const nearestExit = (maze: Array<Array<string | number>>, entrance: [number, number]) => {
    const m = maze.length
    const n = maze[0].length
    maze[entrance[0]][entrance[1]] = 0
    const queue: Array<[number, number]> = [entrance]
    while (queue.length) {
        const q = queue.shift()!
        for (let i = 0, dirs = [-1, 0, 1, 0, -1]; i < dirs.length - 1; i++) {
            const [x, y] = [q[0] + dirs[i], q[1] + dirs[i + 1]]
            if (x >= 0 && x < m && y >= 0 && y < n && maze[x][y] === '.') {
                queue.push([x, y])
                maze[x][y] = (maze[q[0]][q[1]] as number) + 1
                if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
                    return maze[x][y]
                }
            }
        }
    }
    return -1
}

const maze = [
        ['+', '+', '.', '+'],
        ['.', '.', '.', '+'],
        ['+', '+', '+', '.']
    ],
    entrance = [1, 2] as [number, number]
console.log(nearestExit(maze, entrance))
