export class MovingAverage {
    private size: number
    private queue: Array<number> = []
    constructor(size: number) {
        this.size = size
    }

    next(val: number) {
        if (this.queue.length > 3) {
            this.queue.shift()
        }
        this.queue.push(val)
        return this.queue.reduce((pre, cur) => pre + cur) / this.queue.length
    }
}

const movingAverage: MovingAverage = new MovingAverage(3)
console.log(movingAverage.next(1));
console.log(movingAverage.next(10));
console.log(movingAverage.next(3));
console.log(movingAverage.next(5));
