// 获取数组的所有子集
function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    backtrack(nums, 0, [], result)
    return result
}

// 回溯法
function backtrack(nums: number[], start: number, subset: number[], result: number[][]): void {
    if (start === nums.length) {
        if (subset.length > 0) {
            result.push(subset.slice()) // 将当前子集添加到结果中
        }
        return
    }

    // 不选择当前元素
    backtrack(nums, start + 1, subset, result)

    // 选择当前元素
    subset.push(nums[start])
    backtrack(nums, start + 1, subset, result)
    subset.pop()
}

// 示例用法
const num = [1, 2, 3]
const result = subsets(num)
console.log(result)
