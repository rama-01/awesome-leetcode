// the graph
interface Costs {
    [prop: string]: number
}

interface Graph {
    [prop: string]: Costs
}

interface Parents {
    [prop: string]: string | null
}

const graph: Graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['fin'] = 1

graph['b'] = {}
graph["b"]["a"] = 3;
graph['b']['fin'] = 5

graph['fin'] = {}

// the cost table
const costs: Costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity

// the parents table
const parents: Parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

let processed: string[] = []

// find the lowest node
const findLowestNode = (costs: Costs) => {
    let lowestCost = Infinity
    let lowestCostNode = null
    for (const node in costs) {
        const cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestCostNode = node
        }
    }
    return lowestCostNode
}

// update cost table
let node = findLowestNode(costs)

while (node) {
    const cost = costs[node]
    const neighbors = graph[node]
    for (const node in neighbors) {
        const newCost = cost + neighbors[node]
        if (newCost < costs[node]) {
            costs[node] = newCost
            parents[node] = node
        }
    }
    processed.push(node)
    node = findLowestNode(costs)
}

console.log(costs)

export {}
