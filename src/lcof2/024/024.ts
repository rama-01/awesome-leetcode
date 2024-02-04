import ListNode from '../../types/ListNode'
import { generateLinkedList } from '../../utils'

export const reverseLinkedList = (head: ListNode | null) => {
    let pre = null
    let cur = head
    while (cur) {
        // let t = cur.next
        // cur.next = pre
        // pre = cur
        // cur = t
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    return pre
}

const head = [1, 2, 3, 4, 5]
const linkedList = generateLinkedList(head)

linkedList.traverse()
const node = reverseLinkedList(linkedList.headNode)
console.log(node)
linkedList.traverse() //为什么输出1
