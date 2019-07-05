function breadthFirstArray(root) {
  let visited = [];
  let queue = [ root ];

  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    visited.push(node.val);
  }
  return visited;
}

module.exports = {
    breadthFirstArray
};