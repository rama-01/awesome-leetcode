/* 提示：快慢指针，虚拟头节点 */
import LinkedList, { ListNode } from './01_singleList'

export const removeNthFromEnd = (head: ListNode | null, n: number) => {
    const dummy = new ListNode(0)
    dummy.next = head
    /* 定义快，慢指针 */
    let fast: ListNode | null | undefined = dummy
    let slow: ListNode | null = dummy
    for (let i = 1; i <= n + 1; i++) {
        fast = fast?.next
    }
    while (fast) {
        fast = fast.next
        slow = slow!.next
    }
    if (slow && slow.next) {
        slow.next = slow.next.next
    }
    return dummy.next
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.traverse()

const res = removeNthFromEnd(linkedList.headNode, 2)
console.log(res)

linkedList.traverse()
