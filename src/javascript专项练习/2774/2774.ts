declare global {
    interface Array<T> {
        upperBound(item: T): number
    }
}

Array.prototype.upperBound = function (item): number {
    // for (let i = this.length - 1; i >= 0; i--) {
    //     if (this[i] === item) return i
    // }
    // return -1
    /* 或者调用数组方法lastIndexOf */
    return this.lastIndexOf(item)
}

/* 标准答案 */
// 重写upperBound方法
Array.prototype.upperBound = function (target: number) {
    let left = 0
    let right = this.length
    while (left < right) {
        const mid = (left + right) >> 1
        if (this[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left > 0 && this[left - 1] == target ? left - 1 : -1
}

const nums = [1, 4, 5],
    target = 2
console.log(nums.upperBound(target))

export {}
