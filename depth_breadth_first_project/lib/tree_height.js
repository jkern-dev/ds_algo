function treeHeight(root) {
  if (!root) return -1;
  if (!root.left && !root.right) return 0;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


module.exports = {
    treeHeight
};