import ListNode from '../types/ListNode'

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head == null) {
    return head
  }
  let cur = head
  while (cur.next != null) {
    let node = cur.next
    if (node.val < x) {
      [head, node.next, cur.next] = [node, head, node.next]
    } else {
      cur = cur.next
    }
  }
  return head
}

export {}
