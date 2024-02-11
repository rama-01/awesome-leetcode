import { TreeNode } from '../../types/TreeNode'
import { btPrint } from 'hy-algokit'

export default class CBTInserter extends TreeNode {
    private root: TreeNode | null = null

    get_root() {
        return this.root
    }

    insert(value: number) {
        if (!this.root) {
            this.root = new TreeNode(value)
            this.root.parent = null
            return this.root
        }
        let current = this.root
        while (true) {
            if (value > current.value!) {
                if (current.right) {
                    current.right.parent = current
                    current = current.right
                } else {
                    current.right = new TreeNode(value)
                    current.right.parent = current
                    return current.value
                }
            } else {
                if (current.left) {
                    current.left.parent = current
                    current = current.left
                } else {
                    current.left = new TreeNode(value)
                    current.left.parent = current
                    return current.value
                }
            }
        }
    }

    print() {
        btPrint(this.root)
    }
}

// 示例用法
const cbt = new CBTInserter()
cbt.insert(5)
cbt.insert(3)
cbt.insert(7)
cbt.insert(2)
cbt.insert(4)
cbt.insert(6)
cbt.insert(8)

console.log(cbt.get_root())
export const root = cbt.get_root()

cbt.print()
