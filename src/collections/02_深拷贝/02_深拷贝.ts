const deepClone = <T>(obj: T) => {
    // 判断obj是基本类型或null，直接返回
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 判断obj是对象还是数组
    const clone: any = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            //判断对象自身是否包含指定的属性,这样可以避免遍历到原型链上的属性。
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
}

// refactor: 处理循环引用的问题
const deepClone2 = <T>(obj: T, visited = new Map()) => {
    if (visited.has(obj)) {
        return visited.get(obj)
    }
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    const copy: any = Array.isArray(obj) ? [] : {}
    visited.set(obj, copy)
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
}

const o = { a: { b: { c: 1 } } }
// const copy = deepClone(o)
// console.log(copy)

const copy2 = deepClone2(o)
console.log(copy2);
copy2.a.b.c = 3
console.log(copy2,o);



export {}
