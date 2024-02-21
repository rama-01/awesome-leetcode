class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def value(self):
        return self.data

    def next(self):
        return self.next

    def set_value(self, value):
        self.data = value

    def set_next(self, next):
        self.next = next
