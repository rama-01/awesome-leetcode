const createObj = (keysArr: any[], valuesArr: any[]): Record<string, any> => {
    let o: Record<string, any> = {}
    for (let i = 0; i < keysArr.length; i++) {
        if (!o[String(keysArr[i])]) {
            o[String(keysArr[i])] = valuesArr[i]
        }
    }
    return o
}

const keysArr = ['1', 1, false],
    valuesArr = [4, 5, 6]
console.log(createObj(keysArr, valuesArr))

export {}
