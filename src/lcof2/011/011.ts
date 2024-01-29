const numsZero = (nums: number[]) => {
    let ans = 0
    nums.forEach((n) => {
        if (!n) {
            ans++
        }
    })
    return ans
}

const solution = (nums: Array<number>) => {
    let ans = 0
    for (let l = 0, n = nums.length; l < n - 1; l++) {
        let count = 1
        let r = l + 1
        while (r < n) {
            if (numsZero(nums.slice(l, r + 1)) === count) {
                ans++
            }
            r += 2
            count++
        }
    }
    return ans
}

/* 标准答案 */
function findMaxLength(nums: number[]): number {
    const d: Map<number, number> = new Map()
    d.set(0, -1)
    let ans = 0
    let s = 0
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        s += nums[i] === 0 ? -1 : 1
        if (d.has(s)) {
            ans = Math.max(ans, i - d.get(s)!)
        } else {
            d.set(s, i)
        }
    }
    return ans
}

const nums = [0, 1, 0, 1]
console.log(solution(nums))

export {}
