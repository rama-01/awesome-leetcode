from pythonds.basic.deque import Deque


def is_palindrome(string):
    dequeue = Deque()
    for char in string:
        dequeue.addRear(char)
    while dequeue.size() > 1:
        if dequeue.removeRear() != dequeue.removeFront():
            return False
    return True


print(is_palindrome("lsdkjfskf"))
print(is_palindrome("radar"))
