from pythonds.basic.stack import Stack


def par_checker(s):
    stack = Stack()
    for i in range(len(s)):
        if s[i] == '(':
            stack.push(s[i])
        elif s[i] == ')':
            if stack.isEmpty():
                return False
            stack.pop()
        i += 1
    if stack.isEmpty():
        return True
    else:
        return False


# standard answer
def par_checker2(string):
    s = Stack()
    balanced = True
    index = 0
    while index < len(string) and balanced:
        symbol = string[index]
        if symbol == "(":
            s.push(symbol)
        else:
            if s.isEmpty():
                balanced = False
            else:
                s.pop()

        index = index + 1

    if balanced and s.isEmpty():
        return True
    else:
        return False


# standard answer
def par_checker3(symbol_string):
    s = Stack()
    balanced = True
    index = 0
    while index < len(symbol_string) and balanced:
        symbol = symbol_string[index]
        if symbol in '([{':
            s.push(symbol)
        else:
            if s.isEmpty():
                balanced = False
            else:
                top = s.pop()
                if not matches(top, symbol):
                    balanced = False
        index += 1
    if s.isEmpty() and balanced:
        return True
    else:
        return False


def matches(start, end):
    open = '([{'
    close = ')]}'
    return open.index(start) == close.index(end)


print(par_checker3('{{([][])}()}'))
print(par_checker3('[{()]'))
