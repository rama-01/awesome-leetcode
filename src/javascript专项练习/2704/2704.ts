const expect = (o: any): Record<'toBe' | 'notToBe', (...args: any[]) => boolean> => ({
    toBe(p: any): boolean {
        //这里无需显示声明函数返回类型可能为never，因为它是底层类型，可以赋值给boolean类型，可由类型推断出来
        if (o === p) return true
        throw new Error('Not Equal')
    },
    notToBe(q: any): boolean {
        if (o !== q) return true
        throw new Error('Equal')
    }
})

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(null))
console.log(expect(5).notToBe(5))

export {}
