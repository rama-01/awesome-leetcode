from pythonds.basic.stack import Stack


def infix_to_postfix(infix):
    # 定义运算符字典
    prec = {'*': 3, '/': 3, '+': 2, '-': 2, '(': 1}
    operator_stack = Stack()
    postfix_list = []
    token_list = infix.split()

    for token in token_list:
        if token in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" or token in "0123456789":
            postfix_list.append(token)
        elif token == '(':
            operator_stack.push(token)
        elif token == ')':
            op = operator_stack.pop()
            # 将栈中运算符追加至列表，直至删除对应的(
            while op != '(':
                postfix_list.append(op)
                op = operator_stack.pop()
        else:
            # 压入栈之前弹出相等或者更高优先级的运算符
            while (not operator_stack.isEmpty()) and prec[operator_stack.peek()] >= prec[token]:
                postfix_list.append(operator_stack.pop())
            operator_stack.push(token)
    # 检查栈中是否有未处理的运算符
    while not operator_stack.isEmpty():
        postfix_list.append(operator_stack.pop())
    # 转换成字符串表达式输出
    return ' '.join(postfix_list)


print(infix_to_postfix("( A + B ) * ( C + D )"))
print(infix_to_postfix("( A + B ) * C - ( D - E ) * ( F + G )"))
