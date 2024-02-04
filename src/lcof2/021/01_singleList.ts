/* 封装节点 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val //设置默认值
        this.next = next === undefined ? null : next
    }
}

/* 单链表 */
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

    append(value: number) {
        const Node = new ListNode(value)
        if (!this.head) {
            this.head = Node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = Node
        }
        this.size++
        // return this
    }

    traverse() {
        const linkedList: number[] = []
        let current = this.head
        while (current) {
            linkedList.push(current.val)
            current = current.next
        }
        console.log(linkedList.join('->'))
    }
}
