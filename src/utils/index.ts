import LinkedList from '../types/LinkedList'
import ListNode from '../types/ListNode'

export const swap = (arr: number[], i: number, j: number) => {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

export const generateLinkedList = (list: Array<number>): ListNode | null => {
    const linkedList = new LinkedList()
    for (const item of list) {
        linkedList.append(item)
    }
    return linkedList.headNode
}
