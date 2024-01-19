// 判断两个对象是否完全相等
const areDeeplyEqual = (o1: any, o2: any): boolean => {
  if (typeof o1 === null || typeof o1 !== 'object') {
    //这里无需考虑o2?
    return o1 === o2
  }
  if (typeof o1 !== typeof o2) return false
  if (Array.isArray(o1) !== Array.isArray(o2)) return false
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false
    }
  } else {
    const k1 = Object.keys(o1)
    const k2 = Object.keys(o2)
    if (k1.length !== k2.length) return false
    for (const k of k1) {
      if (!areDeeplyEqual(o1[k], o2[k])) return false
    }
  }
  return true
}

export {}
