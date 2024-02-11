export class KthLargest {
    private kthLargest: number
    private stream: Array<number> = []

    constructor(kthLargest: number, stream: Array<number>) {
        this.kthLargest = kthLargest
        this.stream = stream
    }

    add(value: number) {
        this.stream.push(value)
        return this.stream.sort((a, b) => b - a)[this.kthLargest - 1]
    }
}

const kthLargest: KthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3)) // return 4
console.log(kthLargest.add(5)) // return 5
console.log(kthLargest.add(10)) // return 5
console.log(kthLargest.add(9)) // return 8
console.log(kthLargest.add(4)) // return 8
