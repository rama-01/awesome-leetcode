const fibGenerator = function* () {
  let a = 0
  let b = 1
  let tmp
  while (true) {
    yield a
    // [a, b] = [b, a + b];  //这是更为简洁的写法，其实现就是利用了中间变量
    tmp = b
    b = a + b
    a = tmp
  }
}

const gen = fibGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

export {}
