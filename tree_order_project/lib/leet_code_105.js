// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal);

  let leftInOrder = inorder.slice(0, midIdx);
  let rightInOrder = inorder.slice(midIdx + 1);

  let leftPreOrder = preorder.filter((val) => leftInOrder.includes(val));
  let rightPreOrder = preorder.filter((val) => rightInOrder.includes(val));

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);
  return root;
}
