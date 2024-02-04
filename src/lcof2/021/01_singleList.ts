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
