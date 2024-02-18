import ListNode from '../../types/ListNode'
import { generateLinkedList } from '../../utils'
import { reverseLinkedList } from '../024/024'

const sumTwoLinkedLists = (l1: ListNode | null, l2: ListNode | null) => {
    let p1 = reverseLinkedList(l1)
    let p2 = reverseLinkedList(l2)
    let carry = 0
    let curr = new ListNode((p1!.val + p2!.val + carry) % 10)
    const head = curr
    while (p1?.next !== null || p2?.next !== null) {
        const x = p1?.next !== null ? p1?.next.val : 0
        const y = p2?.next !== null ? p2?.next.val : 0
        const sum = carry + x! + y!
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if (p1?.next !== null) p1 = p1!.next
        if (p2?.next !== null) p2 = p2!.next
    }
    if (carry > 0) {
        curr.next = new ListNode(carry)
    }
    return reverseLinkedList(head)
}

const l1 = [7, 2, 4, 3],
    l2 = [5, 6, 4]
const linkedList1 = generateLinkedList(l1)
const linkedList2 = generateLinkedList(l2)

const head = sumTwoLinkedLists(linkedList1, linkedList2)
console.log(head)

export {}
