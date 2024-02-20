import { TreeNode } from '../../types/TreeNode2'
import { root } from '../../utils/test'

export const solution = (root: TreeNode) => {
    let levelSize: number
    const levelLeft: Array<number> = []
    const queue: TreeNode[] = [root]
    while (queue.length) {
        levelLeft.push(queue[0].value)
        levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return levelLeft[levelLeft.length - 1]
}

console.log(solution(root))