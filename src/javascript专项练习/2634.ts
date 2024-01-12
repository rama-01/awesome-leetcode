const filter = (arr: number[], fn: Function) => {
  const newArr: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const res = filter([0, 10, 20, 30], (n: number) => n > 10)
console.log(res)

