declare global {
  interface Array<T> {
    last(): T | -1
  }
}

Array.prototype.last = function () {
  return this.length ? this.at(-1) : -1
}

export {}

const array = [1, 2, 3]
console.log(array.last())
