const simplifyObj = (o: Record<string, any>) => {
  let ans: any = Array.isArray(o) ? [] : {}
  if (Array.isArray(o)) {
    for (let i = 0, len = o.length; i < len; i++) {
      if (o[i]) {
        if (typeof o[i] === 'object') {
          ans.push(simplifyObj(o[i]))
        } else {
          ans.push(o[i])
        }
      }
    }
  } else {
    for (const key in o) {
      if (o[key]) {
        if (typeof o[key] === 'object') {
          ans[key] = simplifyObj(o[key])
        } else {
          ans[key] = o[key]
        }
      }
    }
  }
  return ans
}

const obj = { a: null, b: [false, 1] }
const obj2 = [null, 0, 5, [0], [false, 16]]
console.log(simplifyObj(obj))
console.log(simplifyObj(obj2))

export {}
