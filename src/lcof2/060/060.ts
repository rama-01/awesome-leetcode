export const topKFrequent = (nums: Array<number>, k: number) => {
    const map: Map<number, number> = new Map()
    for (let i = 0, n = nums.length; i < n; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i])! + 1)
        }
    }

    const ans: Array<number> = []
    const visited: Set<number> = new Set()
    const topK = [...map.values()].sort((a, b) => b - a).slice(0, k)
    for (let i = 0; i < topK.length; i++) {
        for (const [key, value] of map) {
            if (topK[i] === value && !visited.has(key)) {
                visited.add(key)
                ans.push(key)
            }
        }
    }
    return ans
}

const nums = [1, 1, 1, 2, 2, 3, 4, 4, 4],
    k = 2
console.log(topKFrequent(nums, k))
