/* 提示：大顶堆?? */
export const arrToMap = <T>(arr: T[]) => {
    const map: Map<T, number> = new Map()
    arr.forEach((item) => {
        if (!map.has(item)) {
            map.set(item, 1)
        } else {
            map.set(item, map.get(item)! + 1)
        }
    })
    return map
}

export const kSmallestPairs = (nums1: Array<number>, nums2: Array<number>, k: number) => {
    const n = nums2.length
    const ans: [number, number][] = []

    for (const [key, value] of arrToMap<number>(nums1)) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < value; j++) {
                ans.push([key, nums2[i]])
                if (ans.length === k) {
                    return ans
                }
            }
        }
    }
}

const nums1 = [1, 1, 11],
    nums2 = [2, 4, 6],
    k = 4
console.log(kSmallestPairs(nums1, nums2, k))
