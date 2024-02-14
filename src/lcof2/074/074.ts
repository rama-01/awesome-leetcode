export const mergeIntervals = (intervals: Array<Array<number>>) => {
    const n = intervals.length
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    const merged: Array<Array<number>> = [sortedIntervals[0]]

    for (let i = 1; i < n; i++) {
        const currentInterval = sortedIntervals[i]
        const lastMergedInterval = merged[merged.length - 1]

        if (lastMergedInterval[1] >= currentInterval[0]) {
            // 更新上一个区间的结束位置
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
        } else {
            merged.push(currentInterval)
        }
    }
    return merged
}

const intervals = [
    [1, 4],
    [4, 5]
]
console.log(mergeIntervals(intervals))
