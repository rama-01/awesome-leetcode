const productLessThenK = (nums: Array<number>, k: number) => {
    let ans = 0
    for (let l = 0, n = nums.length; l < n; l++) {
        let r = l
        let p = nums[r]
        while (p < k && r < n) {
            ans++
            p *= nums[++r]
        }
    }
    return ans
}

/* 标准答案 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let s = 1
    let ans = 0
    const n = nums.length
    for (let i = 0, j = 0; j < n; ++j) {
        s *= nums[j]
        while (i <= j && s >= k) {
            s /= nums[i++]
        }
        ans += j - i + 1
    }
    return ans
}

const nums = [10, 5, 2, 6],
    k = 100
console.log(productLessThenK(nums, k))

export {}
