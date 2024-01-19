const deepClone = <T>(obj: T) => {
  // 判断obj是基本类型或null，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 判断obj是对象还是数组
  const clone: any = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {  //判断对象自身是否包含指定的属性,这样可以避免遍历到原型链上的属性。
      clone[key] = deepClone(obj[key])
    }
  }
  return clone
}

const o = { a: { b: { c: 1 } } }
const copy = deepClone(o)
console.log(copy)

export {}
