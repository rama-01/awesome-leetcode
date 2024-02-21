from pythonds.basic.stack import Stack


def postfix_eval(postfix):
    operand_stack = Stack()
    token_list = postfix.split()
    for token in token_list:
        if token in '0123456789':
            operand_stack.push(int(token))
        else:
            op2 = operand_stack.pop()
            op1 = operand_stack.pop()
            if token == '+':
                res = op1 + op2
            elif token == '-':
                res = op1 - op2
            elif token == '*':
                res = op1 * op2
            else:
                res = op1 / op2
            operand_stack.push(res)
    return operand_stack.pop()


print(postfix_eval('7 8 + 3 2 + /'))
