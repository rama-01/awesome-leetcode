function permute(input: string) {
    const result: Array<string> = []
    function permuteRecursive(arr: Array<string>, memo = []) {
        if (arr.length === 0) {
            result.push(memo.join(''))
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice()
                const next: any = curr.splice(i, 1)
                permuteRecursive(curr.slice(), memo.concat(next))
            }
        }
    }
    permuteRecursive(input.split(''))
    return result
}

const inputString = 'abc'
const permutations = permute(inputString)
console.log(permutations)

export {}
