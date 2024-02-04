export const solution = (asteroids: Array<number>) => {
    const stack: Array<number> = [asteroids[0]]
    for (let i = 1, n = asteroids.length; i < n; i++) {
        stack.push(asteroids[i])
        while (stack.length >= 2 && stack[stack.length - 2] > 0 && stack[stack.length - 1] < 0) {
            const cur = stack.pop()!
            const pre = stack.pop()!
            if (Math.abs(cur) > Math.abs(pre)) {
                stack.push(cur)
            } else if (Math.abs(cur) < Math.abs(pre)) {
                stack.push(pre)
            }
        }
    }
    return stack
}

const asteroids = [5,10,-5]
console.log(solution(asteroids))
