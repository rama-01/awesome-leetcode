const factorialGenerator = function* (n: number):Generator<number> {
    if (n === 0) yield 1
    let ans = 1
    for (let i = 1; i <= n; i++) {
        ans *= i
        yield ans
    }
}

const gen = factorialGenerator(5)

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

export {}

