import LinkedList from '../021/01_singleList'

export const generateIntersectedLinkedList = (listA: Array<number>, listB: Array<number>, skipA: number, skipB: number) => {
    const linkedListA = new LinkedList()
    for (const item of listA) {
        linkedListA.append(item)
    }
    const getIntersectedNode = linkedListA.getNthListNode(skipA + 1)
    const linkedListB = new LinkedList()
    for (const item of listB.slice(0, skipB + 1)) {
        linkedListB.append(item)
    }
    linkedListB.tailNode!.next = getIntersectedNode
}
