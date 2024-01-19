import ListNode from '../types/ListNode'

/* 标准答案1 */
function isPalindrome(head: ListNode | null): boolean {
  if (head == null || head.next == null) return true
  // 快慢指针定位到中点
  let slow: ListNode = head,
    fast: ListNode = head.next
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 翻转链表
  let cur: ListNode = slow.next
  slow.next = null
  let prev: ListNode = null
  while (cur != null) {
    let t: ListNode = cur.next
    cur.next = prev
    prev = cur
    cur = t
  }
  // 判断回文
  while (prev != null) {
    if (prev.val != head.val) return false
    prev = prev.next
    head = head.next
  }
  return true
}

/* 标准答案2 */
function isPalindrome2(head: ListNode | null): boolean {
  let root = head
  const dfs = (node: ListNode | null): boolean => {
    if (node == null) {
      return true
    }
    if (dfs(node.next) && node.val === root.val) {
      root = root.next
      return true
    }
    return false
  }
  return dfs(head)
}

export {}
