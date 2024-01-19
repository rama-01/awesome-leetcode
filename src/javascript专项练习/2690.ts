/* 无穷方法对象 */
// type Record<K extends string | number | symbol, T> = { [P in K]: T }
// Record<Keys, Type>返回一个对象类型，参数Keys用作键名，参数Type用作键值类型。
function createInfiniteObject(): Record<string, () => string> {
  return new Proxy(
    {},
    {
      get: (_, prop) =>() => prop.toString() //处理程序对象中定义了 get 方法，用于拦截对目标对象属性的访问。
    }
  )
}

const obj = createInfiniteObject()
console.log(obj['abc123']())  // "abc123"
console.log(obj.foo()) // 输出： "foo"
console.log(obj.bar()) // 输出： "bar"
console.log(obj.baz()) // 输出： "baz"
