export class MapSum {
    private map: Map<string, number> = new Map()

    insert(key: string, value: number) {
        this.map.set(key, value)
    }

    sum(str: string) {
        let ans = 0
        for (const [key, value] of this.map) {
            if (key.startsWith(str)) {
                ans++
            }
        }
        return ans
    }
}

