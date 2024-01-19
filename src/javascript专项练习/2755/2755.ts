const deepMerge = (o1: any, o2: any) => {
    let o: any
    if (typeof o1 == 'object' && typeof o2 == 'object') {
        if (Array.isArray(o1) && Array.isArray(o2)) {
            o = []
            const len1 = o1.length
            const len2 = o2.length
            if (o1.length < o2.length) {
                for (let i = 0; i < len2; i++) {
                    if (i < len1) {
                        if (typeof o1[i] == 'object' && typeof o2[i] === 'object') {
                            o[i] = deepMerge(o1[i], o2[i])
                        } else {
                            o[i] = o2[i]
                        }
                    } else {
                        o[i] = o2[i]
                    }
                }
            } else {
                for (let i = 0; i < len1; i++) {
                    if (i < len2) {
                        if (typeof o1[i] == 'object' && typeof o2[i] === 'object') {
                            o[i] = deepMerge(o1[i], o2[i])
                        } else {
                            o[i] = o2[i]
                        }
                    } else {
                        o[i] = o1[i]
                    }
                }
            }
        } else if (o1 instanceof Object && o2 instanceof Object) {
            o = {}
            const set1 = new Set(Object.keys(o1))
            const set2 = new Set(Object.keys(o2))
            for (const key in o2) {
                if (set1.has(key) && set2.has(key)) {
                    if (typeof o1[key] === 'object' && typeof o2[key] === 'object') {
                        o[key] = deepMerge(o1[key], o2[key])
                    } else {
                        o[key] = o2[key]
                    }
                } else {
                    o[key] = o2[key]
                }
            }
            for (const key in o1) {
                if (set1.has(key) && !set2.has(key)) {
                    o[key] = o1[key]
                }
            }
        }
    } else {
        return o2
    }
    return o
}

/* 标准答案 */
function deepMerge2(obj1: any, obj2: any): any {
    const isObj = (obj: any) => obj && typeof obj === 'object'
    const isArr = (obj: any) => Array.isArray(obj)
    if (!isObj(obj1) || !isObj(obj2)) {
        return obj2
    }
    if (isArr(obj1) !== isArr(obj2)) {
        return obj2
    }
    for (const key in obj2) {
        obj1[key] = deepMerge(obj1[key], obj2[key])  //？
    }
    return obj1
}

/**
 * let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
 * deepMerge(obj1, obj2); // {"a": 2, "c": 3, "b": 2}
 */

// const obj1 = { a: 1, c: 3 }
// const obj2 = { a: 2, b: 2 }

const obj1 = { a: 1, b: { c: [1, [2, 7], 5], d: 2 } }
const obj2 = { a: 1, b: { c: [6, [6], [9]], e: 3 } }
const res = JSON.stringify(deepMerge2(obj1, obj2), null, 2)
console.log(res)

export {}
