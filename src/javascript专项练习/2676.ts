/* 节流函数首先立即被调用，然后在 t 毫秒的时间间隔内不能再次执行，但应该存储最新的函数参数，以便在延迟结束后使用这些参数调用 fn  */
type Fn = (...args: any[]) => any
const throttle = (f: Fn, t: number): Fn => {
  // 控制函数执行时机标识符
  let pending = false
  let nextArgs: any[] |undefined
  const wrapper = (...args: any[]) => {
    nextArgs = args
    if (!pending) {
      f(...args)
      pending = true
      nextArgs = undefined
    }
    setTimeout(() => {
      pending = false
      if (nextArgs) wrapper(...nextArgs)
    }, t)
  }
  return wrapper
}

const throttled = throttle (console.log, 2000)
throttled('hello')
throttled('hello')

export {}
