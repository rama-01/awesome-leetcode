/* 转换为最长递增子序列问题 */
/* 解法：w按升序排序，若w相同则按h降序排序，最后转换为求h数组的最长递增子序列问题 */
const lengthOfLIS = (envelopes: Array<Array<number>>) => {
    const hArr = envelopes
        .sort((a, b) => {
            //如果不使用sort方法，如果实现多条件排序？
            if (a[0] === b[0]) {
                return b[1] - a[1]
            } else {
                return a[0] - b[0]
            }
        })
        .map((c) => c[1])
    const dp: Array<number> = new Array(hArr.length).fill(1)
    for (let i = 0, n = hArr.length; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (hArr[i] > hArr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

const envelopes = [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]
]
console.log(lengthOfLIS(envelopes))

export {}
