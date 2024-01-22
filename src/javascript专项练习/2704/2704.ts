const expect = (
  o: any
): Record<'toBe' | 'notToBe', (...args: any[]) => boolean | never> => ({
  toBe(p: any): boolean | never {
    //这里函数可能抛出错误，但是如果函数返回值类型为boolean，ts为何也不报错？
    if (o === p) return true
    throw new Error('Not Equal')
  },
  notToBe(q: any): boolean | never {
    if (o !== q) return true
    throw new Error('Equal')
  }
})

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(null))
console.log(expect(5).notToBe(5))

export {}
