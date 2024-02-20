import { TreeNode } from '../../types/TreeNode2'
import { root } from '../../utils/test'

export const rightView = (root: TreeNode) => {
    let levelSize: number
    const levelRight: Array<number> = []
    const queue: TreeNode[] = [root]
    while (queue.length) {
        levelRight.push(queue[queue.length - 1].value)
        levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return levelRight
}

console.log(rightView(root))
