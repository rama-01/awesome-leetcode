export class Solution {
    private w: number[] = []

    get sum() {
        return this.w.reduce((a, b) => a + b)
    }

    constructor(w: number[]) {
        this.w = w
    }

    pickIndex() {
        const r = Math.random()
        const p = this.w.map((i) => i / this.sum)

        let accProb = 0
        for (let i = 0, n = this.w.length; i < n; i++) {
            if (r >= accProb && r < accProb + p[i]) {
                return i
            }
            accProb += p[i]
        }
    }
}

const solution: Solution = new Solution([1, 3])
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
