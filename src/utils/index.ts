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
