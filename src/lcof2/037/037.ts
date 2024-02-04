export const solution = (asteroids: Array<number>) => {
    for (let i = 0, n = asteroids.length; i < n - 1; i++) {
        if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
            if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                asteroids[i + 1] = 0
            } else {
                asteroids[i] = 0
            }
        }
    }
    
}
