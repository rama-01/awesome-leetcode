/* 限定o1,o2是对象或者数组 */

/* const objDiff = (o1: any, o2: any) => {
  const o: Record<string, any> = {}
  const k2 = Object.keys(o2)
  for (const key in o1) {
    if (k2.includes(key) && o1[key] !== o2[key]) {
      if (typeof o1[key] === typeof o2[key]) {
        if (typeof o1[key] === 'object') {
          if (
            (Array.isArray(o1[key]) && Array.isArray(o2[key])) ||
            (o1[key] instanceof Object && o2[key] instanceof Object)
          ) {
            o[key] = objDiff(o1[key], o2[key])
          } else {
            o[key] = [o1[key], o2[key]]
          }
        } else {
          o[key] = [o1[key], o2[key]]
        }
      } else {
        o[key] = [o1[key], o2[key]]
      }
    }
  }
  return o
} */

/* refactor */
const objDiff = (o1: any, o2: any) => {
    const o: Record<string, any> = {}
    const k2 = Object.keys(o2)
    for (const key in o1) {
        if (k2.includes(key) && o1[key] !== o2[key]) {
            if (Array.isArray(o1[key] && Array.isArray(o2[key])) || (o1[key] instanceof Object && o2[key] instanceof Object)) {
                o[key] = objDiff(o1[key], o2[key])
            } else {
                o[key] = [o1[key], o2[key]]
            }
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

const res = JSON.stringify(objDiff(obj1, obj2), null, 2)
console.log(res)

export {}
