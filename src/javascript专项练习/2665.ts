type returnObj = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

const createCounter = (count: number): returnObj => {
  let init = count
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () =>  init = count
  }
}

const count = 5
const counter = createCounter(count)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

export {}