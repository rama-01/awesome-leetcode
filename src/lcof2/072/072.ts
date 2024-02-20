export const sqrt = (x: number) => {
    let n = 1
    while (n * n <= x) {
        n++
    }
    return n - 1
}

/* standard answer */
export const mySqrt = function (x: number) {
    let left = 0
    let right = x
    while (left < right) {
        const mid = (left + right + 1) >>> 1
        if (mid <= x / mid) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
}

console.log(sqrt(4))
console.log(sqrt(8))
