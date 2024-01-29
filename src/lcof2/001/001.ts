const truncate = (a: number, b: number) => {
    let res = 0,
        i = 0
    while (res + b <= a) {
        i++
        res += b
    }
    return i
}

const res = truncate(15, 2)
console.log(res)

export {}
