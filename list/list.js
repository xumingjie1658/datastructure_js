
function list() {
	this.listSize = 0;
	this.pos = 0;
	this.dataSource = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos= currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
	this.forEach = forEach; //iterator example
}

function clear() {
	delete this.dataSource;
	this.dataSource = [];
	this.listSize = 0;
	this.pos = 0;
}

function find(e) {
	for(var i = 0; i < this.dataSource.length; ++i){
		if(this.dataSource[i] == e){
			return i;
		}
	}
	return -1;
}

function toString() {
	return this.dataSource.join('');
}

function insert(e,s) {
	var p = this.find(s);
	if( p > -1){
		try{
			this.dataSource.splice(p+1,0,e);
			++this.listSize;
			return true;
		}
		catch(e){
			console.log(e.message);
			return false;	
		}
	}
	return false;
}

function append(e) {
	try{
		this.dataSource.push(e);
		++this.listSize;
		return true;
	}
	catch(e){
		console.log(e.message);
		return false;
	}
}

function remove(e) {
	var p = this.find(e);
	if( p > -1 ){
		this.dataSource.splice(p,1);
		return true;
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	--this.pos;
}

function next() {
	++this.pos;
}

function length() {
	return this.listSize;
}

function currPos() {
	return this.pos;
}

function moveTo(p) {
	this.pos = p;
}

function getElement() {
	return this.dataSource[this.pos];
}

function contains(e) {
	return (this.find(e) > -1);
}

function forEach(f) {
	for(var i = 0 ; i < this.dataSource.length; ++i){
		f(this.dataSource[i],i,this.dataSource);
	}
}

exports.object = list;