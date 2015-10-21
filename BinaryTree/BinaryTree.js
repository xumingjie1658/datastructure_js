'use strict';

function Node(element) {
    this.element = element;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
	this.root = null;
}

BinaryTree.prototype = {
	insert : function(root,node) {
		if(root == null) {
			root = node;
		}
		else if(node <= root){
			insert(root.left,node);
		}
		else {
			insert(root.right,node);
		}
	},

	remove : function(root,element) {
		if(root != null) {
			if(root.element == element) {
				if(root.element.left == null && root.element.right == null) {
					root = null;
				}
				else if(root.element.left == null) {
					root = root.right;
				}
				else if(root.element.right == null) {
					root = root.left;
				}
				else {
					var tmpNode = this.findMin(root.right);
					root.element = tmpNode.element;
					root.right = remove(root.right, root.element);
				}
			}
			else if(root.element < element) {
				root.right = delete(root.right,element);
			}
			else {
				root.left = delete(root.left, element);
			}
		}
	},

	findMin : function(root) {
		var node = root;
		while(node) {
			node = node.left;
		}
		return node;
	},

	preOrderTraversal : function() {

	},

	inOrderTraversal : function() {

	},

	postOrderTraversal : function() {

	},

	dfs : function() {

	},

	bfs : function() {

	}
}
