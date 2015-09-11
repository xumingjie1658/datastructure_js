function Stack(){
	this.dataSource = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.empty = empty;
	this.clear = clear;
}

function push(element) {
	this.dataSource[this.top++] = element;
}

function pop() {
	return this.dataSource[--this.top];
}

function peek() {
	return this.dataSource[this.top - 1];
}

function length() {
	return this.top;
}

function empty() {
	return (this.top == 0);
}

function clear() {
	this.top = 0;
}

exports.object = Stack;
