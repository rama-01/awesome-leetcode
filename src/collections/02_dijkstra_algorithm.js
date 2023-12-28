// 要计算非加权图中的最短路径，可使用广度优先搜索。要计算加权图中的最短路径，可使用狄克斯特拉算法
// 请注意，狄克斯特拉算法只适用于有向环图
// the graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};
// The costs table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;
// the parents table
// 起点是最短路径的起始节点，它没有父节点。因此，起点的父节点通常被设为None。
// 终点是最短路径的终点，它是路径的最后一个节点。在狄克斯特拉算法中，当找到最短路径时，会从终点开始回溯到起点。设置终点的父节点为None可以作为回溯结束的标志，因为回溯过程中不会再继续向前查找终点的父节点。
const parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

let processed = [];
/**
 * Find the lowest node
 * @param {Object} itCosts Hash table
 * @returns {(string|null)} The lowest node
 */
const findLowestCostNode = itCosts => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach(node => {
    const cost = itCosts[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && !processed.includes(node)) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  // Go through all the neighbors of this node
  const neighbors = graph[node];
  Object.keys(neighbors).forEach(n => {
    const newCost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > newCost) {
      // ... update the cost for this node
      costs[n] = newCost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  // Mark the node as processed
  processed.push(node);

  // Find the next node to process, and loop
  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
