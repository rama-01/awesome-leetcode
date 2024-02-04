import LinkedList, { ListNode } from '../021/01_singleList'

export const getIntersectedNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
    let p: ListNode | null = headA
    let q: ListNode | null = headB
    while (p != q) {
        p = p === null ? headB : p.next
        q = q === null ? headA : q.next
    }
    return p
}
