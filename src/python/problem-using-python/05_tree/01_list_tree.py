def binaryTree(root):
    return [root, [], []]


def insertLeft(root, newBranch):
    r = root.pop(1)
    if len(root) > 1:
        root.insert(1, [newBranch, r, []])
    else:
        root.insert(1, [newBranch, [], []])
    return root


def insertRight(root, newBranch):
    r = root.pop(2)
    if len(root) > 1:
        root.insert(2, [newBranch, [], r])
    else:
        root.insert(2, [newBranch, [], []])
    return root
