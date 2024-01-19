// 防抖函数
type F = (...p: any[]) => any
function debounce(fn: F, t: number): F {
  let timeout: ReturnType<typeof setTimeout> | undefined
  return function (...args) {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.apply(this,args)
    }, t)
  }
}

export {}