const dateRangeGenerator = function* (start: string, end: string, step: number) {
    while (new Date(start) <= new Date(end)) {
        yield start
        const date = new Date(start)
        const startTimeStamp = date.setDate(date.getDate() + step) //返回时间戳
        start = new Date(startTimeStamp).toISOString().slice(0, 10)
    }
}

const start = "2023-04-10", end = "2023-04-20", step = 3
const gen = dateRangeGenerator(start, end, step)
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

export {}
