'use strict';

function Node(element) {
    this.element = element;
    this.next = null;
}

function HashTable() {
	this.tableSize = 100;
	this.data = new Array(this.tableSize);
	for( var i = 0; i < this.tableSize; i++) {
		this.data[i] = null;
	}
}

HashTable.prototype = {

	search : function(key) {
		var hashValue = this.hashFunction(key);
		var node = this.data[hashValue];
		while(node) {
			if(node.element == key) {
				return true;
			}
			node = node.next;
		}
		return false;
	},

	insert : function(key) {
		var keyNode = new Node(key);
		var hashValue = this.hashFunction(key);
		if(this.data[hashValue] == null) {
			this.data[hashValue] = keyNode;
		}
		else {
			var node = this.data[hashValue];
			while(node.next != null) {
				node = node.next;
			}
			node.next = keyNode;
		}
	},

	remove : function(key) {
		var hashValue = this.hashFunction(key);
		if(this.data[hashValue] == null) {
			return false;
		}
		else if(this.data[hashValue] == key) {
			this.data[hashValue] = this.data[hashValue].next;
		}
		else {
			var node = this.data[hashValue];
			while(node.next) {
				if(node.next.element == key) {
					var tmpNode = node.next;
					node.next = node.next.next;
					tmpNode = null;
					return true;
				}
				node = node.next;
			}
		}
		return false;
	},

	printAll : function() {
		for(var i = 0; i < this.data.length; i++) {
			if(this.data[i] != null) {
				var output = "" + i + " : "; 
				var node = this.data[i];
				while(node) {
					output = output + node.element + ' ';
					node = node.next;
				}
				console.log(output);	
			}
		}
	},

	hashFunction : function(key) {
		var hashValue = 0;
		for( var i = 0; i < key.length; i++) {
			hashValue += key.charCodeAt(i);
		}
		return hashValue % this.tableSize;
	}
}

exports.object = HashTable;