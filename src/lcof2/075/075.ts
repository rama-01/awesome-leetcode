import { arrToMap } from '../../utils'

export const relativeSort = (arr1: number[], arr2: number[]) => {
    const ans: number[] = []
    const map = arrToMap(arr1)
    const residue: number[] = []

    for (let i = 0, n = arr2.length; i < n; i++) {
        let count = map.get(arr2[i])

        while (count) {
            ans.push(arr2[i])
            map.set(arr2[i], count--)
        }
    }

    for (let i = 0, n = arr1.length; i < n; i++) {
        if (!ans.includes(arr1[i])) {
            residue.push(arr1[i])
        }
    }

    return [...ans, ...residue.sort((a, b) => a - b)]
}

/* refactor */

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    arr2 = [2, 1, 4, 3, 9, 6]
console.log(relativeSort(arr1, arr2))
