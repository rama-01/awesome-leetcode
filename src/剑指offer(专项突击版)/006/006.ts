const solution = (numbers: Array<number>, target: number) => {
    for (let i = 0, n = numbers.length; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
    return -1
}

/* 优化1 二分查找 */
const solution2 = (numbers: Array<number>, target: number) => {
    // for (let l = 0; l < n - 1; ) {
    //     /*  while (l < r) {
    //         const m = Math.floor((l + r) / 2)
    //         if (numbers[m] < target - numbers[l]) {
    //             break
    //         } else if (numbers[m] > target - numbers[l]) {
    //             r = m - 1
    //         } else {
    //             return [l, m]
    //         }
    //     } */
    //     for (let r = n - 1; r > l; ) {
    //         const m = Math.ceil((l + r) / 2)
    //         if (numbers[m] < target - numbers[l]) {
    //             l = m + 1
    //         } else if (numbers[m] > target - numbers[l]) {
    //             r = m - 1
    //         } else {
    //             return [l, m]
    //         }
    //     }
    // }
    return -1
}

/* 标准答案 */
function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length
    for (let i = 0; ; ++i) {
        const x = target - numbers[i]
        let l = i + 1
        let r = n - 1
        while (l < r) {
            const mid = (l + r) >> 1
            if (numbers[mid] >= x) {
                r = mid
            } else {
                l = mid + 1
            }
        }
        if (numbers[l] === x) {
            return [i, l]
        }
    }
}

function twoSum2(numbers: number[], target: number): number[] {
    for (let i = 0, j = numbers.length - 1; ; ) {
        const x = numbers[i] + numbers[j]
        if (x === target) {
            return [i, j]
        }
        if (x < target) {
            ++i
        } else {
            --j
        }
    }
}

const numbers = [2, 3, 4],
    target = 6
console.log(solution2(numbers, target))

export {}
