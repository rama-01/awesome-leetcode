/* 贪婪算法 */
/* 或称之为NP完全问题 */
/* 判断是否为NP完全问题可能的方法 */
// 元素较少时算法的运行速度非常快，但随着元素数量的增加，速度会变得非常慢。
// 涉及“所有组合”的问题通常是NP完全问题。
// 不能将问题分成小问题，必须考虑各种可能的情况。这可能是NP完全问题。
// 如果问题涉及序列（如旅行商问题中的城市序列）且难以解决，它可能就是NP完全问题。
// 如果问题涉及集合（如广播台集合）且难以解决，它可能就是NP完全问题。
// 如果问题可转换为集合覆盖问题或旅行商问题，那它肯定是NP完全问题。

type States = Set<string>

interface IStations {
    [prop: string]: States
}

let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])
const stations: IStations = {}
stations['kone'] = new Set(['id', 'nv', 'ut'])
stations['ktwo'] = new Set(['wa', 'id', 'mt'])
stations['kthree'] = new Set(['or', 'nv', 'ca'])
stations['kfour'] = new Set(['nv', 'ut'])
stations['kfive'] = new Set(['ca', 'az'])

const finalStations: States = new Set()
while (statesNeeded.size) {
    let bestStation = null
    let statesCovered = new Set()
    // 循环体中使用贪婪算法查找覆盖所有未覆盖且当前需要的states
    for (const station in stations) {
        const states = stations[station]
        const covered = new Set([...statesNeeded].filter((s) => states.has(s)))
        if (covered.size > statesCovered.size) {
            bestStation = station
            statesCovered = covered
        }
    }
    statesNeeded = new Set([...statesNeeded].filter((s) => !statesCovered.has(s)))
    finalStations.add(bestStation as string)
}

console.log(finalStations)
