class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        self.items.pop()

    # 查看栈顶元素
    def peak(self):
        return self.items[len(self.items) - 1]

    def size(self):
        return len(self.items)
