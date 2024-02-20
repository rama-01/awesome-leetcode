export const findMountainPeak = (arr: number[]) => {
    for (let i = 0, n = arr.length; i < n; i++) {
        if (arr[i + 1] < arr[i]) {
            //并未严格验证山峰成立的必要条件
            return i + 1
        }
    }
}

/* O(log n) */
export const findMountainPeak2 = (arr: number[]) => {
    let i = 0,
        j = arr.length - 1

    while (i < j) {
        if (arr[i + 1] > arr[i]) {
            i++
        }
        if (arr[j - 1] > arr[j]) {
            j--
        }
    }
    return i
}
1
const arr = [1,3,5,4,2]
console.log(findMountainPeak2(arr))