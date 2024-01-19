// Object.getPrototypeOf() 静态方法返回指定对象的原型（即内部 [[Prototype]] 属性的值）。
// null,undefined没有原型对象
const checkIfInstance = (obj: any, classFunc: any): boolean => {
  if (classFunc === null || classFunc === undefined) return false
  while (obj !== undefined && obj !== null) {
    const proto = Object.getPrototypeOf(obj)
    if (proto === classFunc.prototype) return true
    obj = proto
  }
  return false
}

console.log(checkIfInstance(new Date(),Date));