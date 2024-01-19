class ArrayWrapper {
  private nums: number[]
  private s: number
  constructor(nums: number[]) {
    this.nums = nums
    this.s = nums.reduce((pre, cur) => pre + cur, 0)
  }
  valueOf() {
    return this.s
  }
  toString() {
    // return `"[${this.nums}]"`
    return `[${this.nums}]`
  }
}

const obj1 = new ArrayWrapper([1, 2]) as unknown as number
const obj2 = new ArrayWrapper([3, 4]) as unknown as number
console.log(obj1 + obj2) // 10
console.log(String(obj1)) // "[1,2]"
console.log(obj1.toString()) //与上例调用完全相同
console.log(String(obj2)) // "[3,4]"

export {}
