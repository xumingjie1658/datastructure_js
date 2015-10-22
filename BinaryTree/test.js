
var BinaryTree  = require('./BinaryTree');

var tree = new BinaryTree.tree();

var root = new BinaryTree.node(10);
tree.preOrderTraversal(root);
var node1 = new BinaryTree.node(14);
tree.insert(root, node1);
tree.preOrderTraversal(root);
var node2 = new BinaryTree.node(5);
tree.insert(root, node2);
tree.preOrderTraversal(root);
var node3 = new BinaryTree.node(12);
tree.insert(root, node3);
tree.preOrderTraversal(root);
tree.remove(root, 14);
tree.preOrderTraversal(root);
