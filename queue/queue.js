function Queue(){
	this.dataSource = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.length = length;
	this.clear = clear;
	this.empty = empty;
	this.toString = toString;
}

function length() {
	return this.dataSource.length;
}

function clear() {
	delete this.dataSource;
	this.dataSource = [];
}

function empty() {
	return (this.dataSource.length == 0);
}

function toString() {
	return this.dataSource.join();
}

function enqueue(e) {
	this.dataSource.push(e);
}

function dequeue() {
	return this.dataSource.shift();
}

exports.object = Queue;