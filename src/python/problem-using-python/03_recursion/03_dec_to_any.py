from pythonds.basic.stack import Stack


def dec_to_any(n, base):
    convert_str = '0123456789ABCDEF'
    stack = Stack()
    while n > 0:
        if n < base:
            stack.push(convert_str[n])
        else:
            stack.push(convert_str[n % base])
        n //= base
    res = ''
    while not stack.isEmpty():
        res += stack.pop()
    return res


print(dec_to_any(1453, 16))
