import { swap, testSort } from 'hy-algokit'
export const quickSortArr = (arr: number[][]): number[][] => {
    // 2.使arr数组按第一个元素排序
    const len = arr.length
    for (let i = 1; i < len; i++) {
        let j = i
        const newArr = arr[i]
        while (j >= 1 && newArr[0] < arr[j][0]) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = newArr
    }
    return arr
}

export const mergeIntervals = (arr: number[][]) => {
    const sortedIntervals = arr.sort((a, b) => a[0] - b[0])
    const merged = [sortedIntervals[0]]
    const n = sortedIntervals.length

    for (let i = 1; i < n; i++) {
        const currentInterval = sortedIntervals[i]
        const lastMergedInterval = merged[merged.length - 1]

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
        } else {
            merged.push(currentInterval)
        }
    }
    return merged
}

const intervals = [
    [6, 2],
    [3, 1]
]
console.log(mergeIntervals(intervals))
