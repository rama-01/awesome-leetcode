import ListNode from './ListNode'

class LinkedList {
  private head: ListNode | null = null
  private size: number = 0
  get length() {
    return this.size
  }
  // append
  append(value: number) {
    // 创建一个新节点
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      // current.next有值，指向下一个节点
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }
  // 遍历链表方法
  traverse() {
    const values: number[] = []
    let current = this.head
    while (current) {
      values.push(current.val)
      current = current.next
    }
    console.log(values.join('->'))
  }
}

const linkedList: LinkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.traverse()
console.log(linkedList.length)

export {}
