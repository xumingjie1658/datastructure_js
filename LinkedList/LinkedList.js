'use strict';

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
}

LinkedList.prototype = {
	insert : function(element,item){
		var node;
		if( node = this.find(item)) {
			var newNode = new Node(element);
			newNode.next = node.next;
			node.next = newNode;
		}
		else {
			return false;
		}
	},

	remove : function(element) {
		var node;
		if( node = this.findPrevious(element)) {
			var tmpNode = node.next;
			node.next = node.next.next;
			tmpNode = null;
			return true;
		}
		else{
			return false;
		}
	},

	find : function(element) {
		var node = this.head;
		while( node != null ) {
			if( node.element == element ) {
				return node;
			}
			node = node.next;			
		}
		return false;
	},

	findPrevious : function(element) {
		var node = this.head;
		while(node.next != null) {
			if(node.next.element == element) {
				return node;
			}
			node = node.next;
		}
		return false;
	},

	printAll : function() {
		var node = this.head;
		var array = [];
		while(node != null) {
			array.push(node.element);
			node = node.next;
		}
		console.log(array);
	}
}

exports.object = LinkedList;
