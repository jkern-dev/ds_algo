// function treeSum(root) {
//   let total = 0;
//   if (!root) return total;
//   let queue = [ root ];
//   while (queue.length) {
//     let node = queue.shift();
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//     total += node.val;
//   }
//   return total;
// }

// recursive method
function treeSum(root) {
  if (!root) return 0;
  return treeSum(root.left) + root.val + treeSum(root.right);
}


module.exports = {
    treeSum
};