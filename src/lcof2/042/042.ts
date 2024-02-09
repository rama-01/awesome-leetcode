export class RecentCounter {
    private counts: number = 0
    public requests: Array<number> = []
    constructor(t?: number) {
        this.counts = t ?? 0
    }

    get tail() {
        return this.requests[this.requests.length - 1]1
    }

    ping(t: number) {
        if (t <= this.tail) {
            throw new Error('ping function called failed')
        }
        this.requests.push(t)
        while (this.requests[0] < t - 3000) {
            this.requests.shift()
        }
        return this.requests.length
    }
}

const recentCounter: RecentCounter = new RecentCounter()
console.log(recentCounter.ping(1), recentCounter.requests)
console.log(recentCounter.ping(100), recentCounter.requests)
console.log(recentCounter.ping(3001), recentCounter.requests)
console.log(recentCounter.ping(3002), recentCounter.requests)
