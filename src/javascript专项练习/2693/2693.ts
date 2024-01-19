/* 使用自定义上下文调用函数 */
declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any
  }
}

/* Function.prototype.callPolyfill = function (context, ...args): any {
  const fn = this.bind(context)
  return fn(...args)
}
 */
/* 可以使用apply的情况 */
Function.prototype.callPolyfill = function (context, ...args): any {
 return this.apply(context)
}

function increment() {
  this.count++
  return this.count
}
console.log(increment.callPolyfill({ count: 1 }));

export {}
