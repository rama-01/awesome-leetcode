export class TreeNode {
    value: number | undefined
    left: TreeNode | null = null
    right: TreeNode | null = null
    parent: TreeNode | null = null

    constructor(value?: number) {
        this.value = value
    }
    // 判断左右节点
    get isLeft() {
        return !!(this.parent && this.parent.left === this)
    }
    get isRight() {
        return !!(this.parent && this.parent.right === this)
    }
}

