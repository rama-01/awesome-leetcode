/* 回溯法的基本模板 */
// res = []
// path = []

// def backtrack(未探索区域, res, path):
//     if path 满足条件:
//         res.add(path) # 深度拷贝
//         # return  # 如果不用继续搜索需要 return
//     for 选择 in 未探索区域当前可能的选择:
//         if 当前选择符合要求:
//             path.add(当前选择)
//             backtrack(新的未探索区域, res, path)
//             path.pop()
/* 标准答案 */
function subsets(nums: number[]): number[][] {
    const n = nums.length
    const ans: number[][] = []
    const dfs = (i: number, t: number[]) => {
        ans.push([...t])  //ans.push(t)
        while (i < n) {
            t.push(nums[i++])
            dfs(i, t)
            t.pop()
        }
    }
    dfs(0, [])
    return ans
}

const nums = [1, 2, 3]
console.log(subsets(nums))

export {}
