export const findUniqueNumber = (nums: number[]) => {
    let i = 0
    while (nums[i] === nums[i + 1]) {
        i += 2
    }
    return nums[i]
}

const nums = [3, 3, 7, 7, 10, 11, 11]
console.log(findUniqueNumber(nums))
