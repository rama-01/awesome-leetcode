import { TreeNode } from '../../types/TreeNode2'
import { root } from '../../utils/test'

export const pathSum = (root: TreeNode | null, currentSum: number = 0): number => {
    if (!root) return 0
    currentSum = currentSum * 10 + root.value
    if (!root.left && !root.right) {
        return currentSum
    }
    return pathSum(root.left, currentSum) + pathSum(root.right, currentSum)
}

console.log(pathSum(root))

