export const rpn = (tokens: Array<string>) => {
    let res: number
    const stack: Array<string | number> = []
    const operators = ['+', '-', '*', '/']
    for (let i = 0, n = tokens.length; i < n; i++) {
        if (!operators.includes(tokens[i])) {
            stack.push(tokens[i])
        } else {
            const second = stack.pop()
            const first = stack.pop()
            res = parseInt(eval(`${first} ${tokens[i]} ${second}`))
            stack.push(res)
        }
    }
    return res!
}

const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
console.log(rpn(tokens))
