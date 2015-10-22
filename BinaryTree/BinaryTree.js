'use strict';

function Node(element) {
    this.element = element;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
}

BinaryTree.prototype = {
	insert : function(root,node) {
		if(root == null) {
			root = node;
		}
		else if(node.element <= root.element){
			if(root.left == null) {
				root.left = node;
			}
			else {
				this.insert(root.left,node);
			}
		}
		else {
			if( root.right == null) {
				root.right = node;
			}
			else {
				this.insert(root.right,node);
			}
		}
	},

	remove : function(root,element) {
		if(root != null) {
			if(root.element == element) {
				if(root.left == null && root.right == null) {
					root = null;
				}
				else if(root.left == null) {
					root = root.right;
				}
				else if(root.right == null) {
					root = root.left;
				}
				else {
					var tmpNode = this.findMin(root.right);
					root.element = tmpNode.element;
					root.right = this.remove(root.right, root.element);
				}
			}
			else if(root.element < element) {
				if(root.right != null) {
					root.right = this.remove(root.right,element);
				}
			}
			else {
				if(root.left != null) {
					root.left = this.remove(root.left, element);
				}
			}
		}
		return root;
	},

	findMin : function(root) {
		var node = root;
		while(node.left) {
			node = node.left;
		}
		return node;
	},

	preOrderTraversal : function(root) {
		if( root != null ) {
			console.log(root.element);
			this.preOrderTraversal(root.left);
			this.preOrderTraversal(root.right);
		}
	},

	inOrderTraversal : function(root) {
		if( root != null ) {
			this.inOrderTraversal(root.left);
			console.log(root.element);
			this.inOrderTraversal(root.right);
		}
 	},

	postOrderTraversal : function(root) {
		if( root != null ){
			this.postOrderTraversal(root.left);
			this.postOrderTraversal(root.right);
			console.log(root.element);
		}
	}
}

exports.node = Node;
exports.tree = BinaryTree;
