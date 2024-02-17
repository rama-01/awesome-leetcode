import LinkedList from '../types/LinkedList'

export const swap = (arr: number[], i: number, j: number) => {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

export const generateLinkedList = (list: Array<number>): LinkedList => {
    const linkedList = new LinkedList()
    for (const item of list) {
        linkedList.append(item)
    }
    return linkedList
}

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
