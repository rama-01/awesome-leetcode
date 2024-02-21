from pythonds.basic.stack import Stack


def divide_by_2(dec):
    rem_stack = Stack()
    while dec > 0:
        rem = dec % 2
        rem_stack.push(rem)
        dec //= 2

    binary = ''
    while not rem_stack.isEmpty():
        binary += str(rem_stack.pop())
    return binary


# 拓展
def dec_converter(dec, base):
    rem_stack = Stack()
    while dec > 0:
        rem = dec % base
        rem_stack.push(rem)
        dec //= base

    new_string = ''
    while not rem_stack.isEmpty():
        new_string += str(rem_stack.pop())
    return new_string


print(divide_by_2(116))
print(dec_converter(116, 8))
print(dec_converter(116, 16))
