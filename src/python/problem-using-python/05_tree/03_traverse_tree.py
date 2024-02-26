class BinaryTree:
    def __init__(self, rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None

    # 实现获取左右子树及根值的方法
    def getLeftChild(self):
        return self.leftChild

    def getRightChild(self):
        return self.rightChild

    def getRootVal(self):
        return self.key

    def setRootVal(self, val):
        self.key = val

    # 1. 前序遍历: 根节点-左子树-右子树
    def preorder(self):
        print(self.key)
        if self.leftChild:
            self.leftChild.preorder()
        if self.rightChild:
            self.rightChild.preorder()

    # 2. 中序遍历：左子树-根节点-右子树
    def inorder(self):
        if self.leftChild:
            self.leftChild.preorder()
        print(self.key)
        if self.rightChild:
            self.rightChild.preorder()

    # 3. 后序遍历：左子树-右子树-根节点
    def postorder(self):
        if self.leftChild:
            self.leftChild.postorder()
        if self.rightChild:
            self.rightChild.postorder()
        print(self.key)

    def levelOrder(self):
        pass


# test
root = BinaryTree(1)
root.leftChild = BinaryTree(2)
root.rightChild = BinaryTree(3)
# root.preorder()
# root.inorder()
root.postorder()
