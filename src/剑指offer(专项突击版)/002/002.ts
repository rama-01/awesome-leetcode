const binarySum = (str1: string, str2: string) => {
    let str: string = '',
        residue = 0
    for (let i = str1.length - 1; i >= 0; i--) {
        const sum = Number(str1[i]) + Number(str2[i]) + residue
        if (sum === 2) {
            if (i === 0) {
                str += '01'
            } else {
                str += '0'
                residue = 1
            }
        } else {
            str += String(sum)
            residue = 0
        }
    }
    return str.split('').reverse().join('')
}

const a = '1010',
    b = '1011'
console.log(binarySum(a, b))

export {}
