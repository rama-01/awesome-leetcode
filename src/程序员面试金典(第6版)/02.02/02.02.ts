import ListNode from '../types/ListNode'
/* 双指针，链表 */
const kthToLast = (head: ListNode, k: number): number => {
  /* 定义快，慢指针 */
  let fast: ListNode | null = head
  let slow: ListNode = head
  for (let i = 0; i < k; i++) {
    fast = fast!.next  //如果不作断言呢？
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next as ListNode
  }
  return slow.val
}

export {}
