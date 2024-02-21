import ListNode from '../../types/ListNode'

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (head == null) {
    return head
  }
  const set = new Set<number>([head.val])
  let cur = head
  while (cur.next != null) {
    if (set.has(cur.next.val)) {
      cur.next = cur.next.next
    } else {
      set.add(cur.next.val)
      cur = cur.next
    }
  }
  return head
}

