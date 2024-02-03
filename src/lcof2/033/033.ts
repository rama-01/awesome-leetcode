import isAnagram from '../032/032'

const isMapIncludesValue = (map: Map<any, any>, val: any) => Array.from(map.values()).find((i) => i.includes(val))

const anagramGroup = (strs: Array<string>) => {
    let ans: Map<string, Array<string>> = new Map([[strs[0], [strs[0]]]])
    for (let i = 0, n = strs.length; i < n - 1; i++) {
        if (isMapIncludesValue(ans, strs[i])) continue
        ans.set(strs[i], [strs[i]])
        for (let j = i + 1; j < n; j++) {
            if (isMapIncludesValue(ans, strs[j])) continue
            if (isAnagram(strs[i], strs[j])) {
                ans.get(strs[i])!.push(strs[j])
            }
        }
    }
    return [...ans.values()]
}

/* standard answer */
function groupAnagrams(strs: string[]): string[][] {
    const d: Map<string, string[]> = new Map()
    for (const s of strs) {
        const k = s.split('').sort().join('')
        if (!d.has(k)) {
            d.set(k, [])
        }
        d.get(k)!.push(s)
    }
    return Array.from(d.values())
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(anagramGroup(strs))

export {}
