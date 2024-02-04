export const solution = (asteroids: Array<number>) => {
    const stack: Array<number> = [asteroids[0]]
    for (let i = 1, n = asteroids.length; i < n; i++) {
        stack.push(asteroids[i])
        let m = stack.length
        while (m >= 2 && stack[m - 2] > 0 && stack[m - 1] < 0) {
            const cur = stack.pop()!
            const pre = stack.pop()!
            if (Math.abs(cur) > Math.abs(pre)) {
                stack.push(cur)
                m -= 1
            } else if (Math.abs(cur) < Math.abs(pre)) {
                stack.push(pre)
                m -= 1
            } else {
                m -= 2
            }
        }
    }
    return stack
}

const asteroids = [-2,-1,1,2]
console.log(solution(asteroids))
