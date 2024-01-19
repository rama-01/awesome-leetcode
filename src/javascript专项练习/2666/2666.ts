/* 只允许一次函数调用 */
/* 使用闭包 */
const once = (fn: Function): Function | undefined => {
  let calls = 0
  if (calls > 0) {
    return
  } else {
    calls++
    return fn
  }
}

const fn = (a: number, b: number, c: number) => a * b * c
const onceFn = once(fn)
if (onceFn) { 
  console.log(onceFn(5, 7, 4));
}

/* 标准答案 */
function once2<T extends (...args: any[]) => any>(
  fn: T,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let called = false;
  return function (...args) {
      if (!called) {
          called = true;
          return fn(...args);
      }
  };
}

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/

export {}
