/* 限定o1,o2是对象或者数组 */

const objDiff = (o1: any, o2: any) => {
  const o: Record<string, any> = {}
  if (typeof o1 !== typeof o2 || (Array.isArray(o1) ^ Array.isArray(o2))) return {}
  const k2 = Object.keys(o2)
  for (const key in o1) {
    if (k2.includes(key) && o1[key] !== o2[key]) {
      if (typeof o1[key] === 'object' || typeof o2[key] === 'object') {
        objDiff(o1[key], o2[key])
      }
      o[key] = [o1[key], o2[key]]
    }
  }
  return o
}

const obj1 = {
  a: 5,
  v: 6,
  z: [1, 2, 4, [2, 5, 7]]
}
const obj2 = {
  a: 5,
  v: 7,
  z: [1, 2, 3, [1]]
}

console.log(obj1, obj2)

export {}
