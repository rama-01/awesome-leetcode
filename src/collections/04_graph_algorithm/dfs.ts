class Graph<T> {
    private vertexes: T[] = [] //顶点
    private adjList: Map<T, T[]> = new Map() //相邻点,即表示边

    // 添加点
    addVertex(vertex: T) {
        this.vertexes.push(vertex)
        this.adjList.set(vertex, [])
    }

    // 添加边
    addEdge(v1: T, v2: T) {
        this.adjList.get(v1)?.push(v2)
        this.adjList.get(v2)?.push(v1)
    }

    // 使用队列数据结构
    bfs() {
        if (!this.vertexes.length) return
        const queue: T[] = []
        const visited: Set<T> = new Set()
        queue.push(this.vertexes[0])
        while (queue.length) {
            const vertex = queue.shift()!
            visited.add(vertex)
            console.log(vertex)
            const neighbors = this.adjList.get(vertex)!
            for (const n of neighbors) {
                if (!visited.has(n)) {
                    queue.push(n)
                }
            }
        }
    }

    // 使用栈结构
    dfs() {
        if (!this.vertexes.length) return
        const stack: T[] = []
        const visited: Set<T> = new Set()
        stack.push(this.vertexes[0])
        while (stack.length) {
            const vertex = stack.pop()!
            visited.add(vertex)
            console.log(vertex)
            const neighbors = this.adjList.get(vertex)!
            for (let n = neighbors.length - 1; n >= 0; n--) {
                if (!visited.has(neighbors[n])) {
                    stack.push(neighbors[n])
                }
            }
        }
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'F')
graph.addEdge('C', 'G')

graph.dfs()

export {}
