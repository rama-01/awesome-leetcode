declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function (fn) {
  //不要使用箭头函数,因为需要获取对象实例this
  return this.reduce((acc, item) => {
    const key = fn(item)
    if (acc[key]) {
      acc[key].push(item)
    } else {
      acc[key] = [item]
    }
    return acc
  }, {})
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fn = function (n: number) {
  return String(n > 5)
}
console.log(array.groupBy(fn))

export {}
