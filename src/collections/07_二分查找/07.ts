const binarySearch = (arr: Array<number>, target: number) => {
    // 1.定义左右指针
    let left = 0
    let right = arr.length - 1
    // 2.移动左/右指针,思考这里循环的中止条件为什么是<=
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
