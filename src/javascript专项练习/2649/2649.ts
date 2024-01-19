type MultidimentionalArray = (MultidimentionalArray | number)[]

const inorderTraversal = function* (
  arr: MultidimentionalArray
): Generator<number, void, unknown> {
  for (const e of arr) {
    if (Array.isArray(e)) {
      yield* inorderTraversal(e)
    } else {
      yield e
    }
  }
}
const arr = [[[6]], [1, 3], []]
const gen = inorderTraversal(arr)
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


export {}
