import ListNode from './ListNode'

export default class LinkedList {
    private head: ListNode | null = null
    private size: number = 0
    get length() {
        return this.size
    }

    get headNode() {
        return this.head
    }

    get tailNode() {
        let current = this.head
        while (current?.next) {
            current = current.next
        }
        return current
    }

    // 获取正序第n个节点
    getNthListNode(index: number): ListNode | null {
        if (index < 1 || index > this.size) return null
        let current = this.head
        let j = 1
        while (j < index) {
            current = current!.next
            j++
        }
        return current
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
