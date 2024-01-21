const arrToObj = (arr: any) => {
    let o: any = {}
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            o[i] = arrToObj(arr[i])
        } else {
            o[i] = arr[i]
        }
    }
    return o
}

/* 删除数组假植 */
/* const deleteFalse = (arr: any[]): any[] =>
    arr.filter((i) => {
        if (Array.isArray(i)) {
            return deleteFalse(i)
        } else {
            return i
        }
    })

const arr = [false, [false, false, 5, false, 10], false, [false], [false]]
console.log(deleteFalse(arr)) */

const filterObject = (o: any, f: (x: any) => boolean) => {
    for (const key in o) {
        if (typeof o[key] !== 'object') {
            if (!f(o[key])) {
                Array.isArray(o) ? (o[+key] = false) : delete o[key]
            }
        } else {
            filterObject(o[key], f)
        }
    }
    // 处理标记假值
    if (Array.isArray(o)) {
        o.filter((i) => {
            if (typeof i !== 'object') {
                return i
            } else {
            }
        })
    }
    return o
}

/* 标准答案 */
function deepFilter(obj: Record<string, any>, fn: Function): Record<string, any> | undefined {
    const dfs = (data: any): any => {
        if (Array.isArray(data)) {
            const res = data.map(dfs).filter((item: any) => item !== undefined)
            return res.length > 0 ? res : undefined
        }
        if (typeof data === 'object' && data !== null) {
            const res: Record<string, any> = {}
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const filteredValue = dfs(data[key])
                    if (filteredValue !== undefined) {
                        res[key] = filteredValue
                    }
                }
            }
            return Object.keys(res).length > 0 ? res : undefined
        }
        return fn(data) ? data : undefined
    }

    return dfs(obj)
}

// const obj = { a: 1, b: '2', c: 3, d: '4', e: 5, f: 6, g: { a: 1 } },
//     fn = (x: any) => typeof x === 'string'

const obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]],
    fn = (x: any) => x > 0

// const obj = [[[[5]]]],
//     fn = (x:any) => Array.isArray(x)

console.log(filterObject(obj, fn))

export {}
