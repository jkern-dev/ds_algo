function breadthFirstSearch(startingNode, targetVal) {
  let queue = [ startingNode ];
  let visited = new Set();
  while (queue.length) {
    let node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      if (node.val === targetVal) return node;
      queue.push(...node.neighbors);
    }
  }
  return null;
}

module.exports = {
    breadthFirstSearch
};