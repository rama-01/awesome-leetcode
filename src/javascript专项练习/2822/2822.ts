const argsToArr = (a: string | string[], b: string) => {
    if (Array.isArray(a)) {
        a.push(b)
    } else {
        a = [a]
        a.push(b)
    }
    return a
}

const invertObj = (obj: Record<string, string>) => {
    const map: Map<string, any> = new Map()
    for (const key in obj) {
        if (!map.has(obj[key])) {
            map.set(obj[key], key)
        } else {
            map.set(obj[key], argsToArr(map.get(obj[key]), key))
        }
    }
    return Object.fromEntries(map)
}

/* 标准答案 */
function invertObject(obj: Record<any, any>): Record<any, any> {
    const ans: Record<any, any> = {}
    for (const key in obj) {
        if (ans.hasOwnProperty(obj[key])) {
            if (Array.isArray(ans[obj[key]])) {
                ans[obj[key]].push(key)
            } else {
                ans[obj[key]] = [ans[obj[key]], key]
            }
        } else {
            ans[obj[key]] = key
        }
    }
    return ans
}

const obj = { a: '1', b: '2', c: '2', d: '4' }
console.log(invertObj(obj))

export {}
