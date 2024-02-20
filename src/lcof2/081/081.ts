/* 使用回溯法 */
// const combinationSum1 = (candidates: number[], target: number) => { 
//     const res: number[][] = []
//     const path: number[] = []
//     function dfs(start: number, res: number[][], path: number[]) { 
//         if () {
            
//         }
//     }
// }

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const temp: number[] = []

    function dfs(start: number, currentSum: number) {
        if (currentSum === target) {
            result.push([...temp])
            return
        }

        if (currentSum > target) {
            return
        }

        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i])
            dfs(i, currentSum + candidates[i])
            temp.pop()
        }
    }

    dfs(0, 0)
    return result
}

// 测试
const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target))

export {}
