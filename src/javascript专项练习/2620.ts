// 使用闭包
const createCounter = (n: number) => {
  let i = -1
  return () => {
    i++
    return n + i
  }
}

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
