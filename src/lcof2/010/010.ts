const numsSubArraySumEqualK = (nums: Array<number>, k: number) => {
    let ans = 0
    for (let l = 0, n = nums.length; l < n; l++) {
        let r = l
        let sum = nums[r]
        while (sum <= k && r < n) {
            if (sum === k) {
                ans++
            }
            sum += nums[++r]
        }
    }
    return ans
}

const nums = [1, 1, 1],
    k = 2
console.log(numsSubArraySumEqualK(nums, k))

export {}
