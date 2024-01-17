const argumentsLength = (...args: any[]) => args.length

console.log(argumentsLength({}, null, "3")) // 3);
console.log(argumentsLength());


export {}
