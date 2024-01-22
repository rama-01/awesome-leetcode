const undefinedToNull = (o: Record<any, any>) => {
    let ans: any = Array.isArray(o) ? [] : {}
    for (const key in o) {
        if (typeof o[key] === 'object') {
            ans[key] = undefinedToNull(o[key])
        } else {
            if (o[key] === undefined) {
                ans[key] = null
            } else {
                ans[key] = o[key]
            }
        }
    }
    return ans
}

/* 标准答案 */
// 这里可以直接使用形参，无需定义一个新变量
function undefinedToNull2(obj: Record<any, any>): Record<any, any> {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = undefinedToNull(obj[key])
        }
        if (obj[key] === undefined) {
            obj[key] = null
        }
    }
    return obj
}

const obj = { a: undefined, b: ['a', undefined] }
console.log(undefinedToNull(obj))

export {}
