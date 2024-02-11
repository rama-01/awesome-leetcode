import { TreeNode } from '../types/TreeNode2'
import { btPrint } from 'hy-algokit'

export const root = new TreeNode(1, new TreeNode(3, new TreeNode(5, new TreeNode(6)), new TreeNode(3, null, new TreeNode(9))), new TreeNode(2, null, new TreeNode(9)))

btPrint(root)
