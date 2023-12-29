type Fn = (acc: number, cur: number) => number
const reduce = (nums: number[], fn: Fn, init: number): number => {
  let acc: number = init
  for (const i of nums) {
    acc = fn(acc, i)
  }
  return acc
}

const arr = [1, 2, 3, 4, 5]
console.log(reduce(arr, (acc, cur) => acc + cur, 10))

export {}


