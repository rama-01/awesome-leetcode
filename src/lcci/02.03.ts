import ListNode from '../types/ListNode'

/* Do not return anything, modify node in-place instead. */
/* 删除中间节点 */
const deleteNode = (node: ListNode): void => {
  node.val = node.next!.val
  node.next = node.next!.next
}

export {}