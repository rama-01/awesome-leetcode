const threeSums = (nums: Array<number>) => {
    let ans: Array<Array<number>> = []
    for (let i = 0, n = nums.length; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0 && !ans.find((r) => r.includes(nums[i]) && r.includes(nums[j]))) {
                    ans.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return ans
}

/* 标准答案 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const ans: number[][] = []
    const n = nums.length
    for (let i = 0; i < n - 2 && nums[i] <= 0; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = n - 1
        while (j < k) {
            const x = nums[i] + nums[j] + nums[k]
            if (x < 0) {
                ++j
            } else if (x > 0) {
                --k
            } else {
                ans.push([nums[i], nums[j++], nums[k--]])
                while (j < k && nums[j] === nums[j - 1]) {
                    ++j
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    --k
                }
            }
        }
    }
    return ans
}

const nums = [-1, 0, 1, 2, -1, -4]
const nums2: any[] = [0]
console.log(threeSums(nums2))

export {}
