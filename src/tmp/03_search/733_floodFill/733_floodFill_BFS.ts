/* 复习DFS算法 */
const floodFill = (image: number[][], sr: number, sc: number, newColor: number) => {
    const rows = image.length
    const cols = image[0].length
    const oldColor = image[sr][sc]
    if (newColor === oldColor) return
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || image[i][j] !== oldColor) return
        image[i][j] = newColor
        // 分别从四个方向搜索
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    dfs(sr, sc)
    return image
}

const image = [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1]
    ],
    sr = 1,
    sc = 1,
    newColor = 2

console.log(floodFill(image, sr, sc, newColor))

export {}
