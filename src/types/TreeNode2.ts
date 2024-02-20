export class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.value = value === undefined ? 0 : value
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}