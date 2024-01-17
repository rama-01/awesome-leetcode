const expect = (
  o: any
): Record<'toBe' | 'notToBe', (...args: any[]) => boolean | never> => ({
  toBe(p: any): boolean | never {
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
