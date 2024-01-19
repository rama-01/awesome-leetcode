const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals.sort((a, b) => a[1] - b[1])  //以子序列最大值排序
  let prev = intervals[0]
  const n = intervals.length
  let res = 0
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      prev = intervals[i - 1]
      res++
    } else {
      prev = intervals[i]
    }
  }
  return res
}

const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
console.log(eraseOverlapIntervals(intervals));

const intervals2 = [[1, 2], [1, 2], [1, 2]]
console.log(eraseOverlapIntervals(intervals2));

export {}
