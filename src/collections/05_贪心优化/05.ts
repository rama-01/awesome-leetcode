/* 贪心算法是一种在每一步选择中都采取当前状态下最优决策的算法。它通常适用于那些问题，其中每一步的最优解可以导致全局最优解。 */
function makeChange(amount: number): number[] {
    const denominations = [100, 50, 20, 10, 5, 1] // 纸币面额
    const result: number[] = []
    let remainingAmount = amount
    // 尽可能使用面额较大的纸币
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i]
        const count = Math.floor(remainingAmount / denomination)
        result.push(count)
        remainingAmount -= count * denomination
    }
    return result
}

const amount = 123
const change = makeChange(amount)
console.log(change) // 输出最少纸币数量的数组

export {}