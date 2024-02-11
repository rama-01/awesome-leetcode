// use queue data-structure
import { TreeNode } from '../../types/TreeNode'
import { root } from '../043/043'

export const maxValuesPerLevel = (root: TreeNode | null) => {
    if (!root) return []
    const res: Array<number> = []
    const queue: TreeNode[] = [root]

    while (queue.length) {
        let levelMax = Number.MIN_SAFE_INTEGER
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!
            levelMax = Math.max(levelMax as number, node.value as number)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(levelMax)
    }
    return res
}

// test
console.log(maxValuesPerLevel(root))
