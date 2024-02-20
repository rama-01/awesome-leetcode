export const solution = (nums: number[], k: number, t: number) => {
    for (let i = 0, n = nums.length; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
}

const nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3

console.log(solution(nums, k, t))
