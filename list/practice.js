//1.增加一个向列表插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执行插入操作
var List = require('./list');
var list = new List.object();
list.appendBiggest = function(e){
	for(var i = 0; i < this.dataSource.length; ++i){
		if(e <= this.dataSource[i]){
			return false;
		}
	}
	this.append(e);
	return true;
}

list.appendSmallest = function(e) {
	for( var i = 0; i < this.dataSource.length; ++i) {
		if(e >= this.dataSource[i]) {
			return false;
		}
	}
	this.append(e);
	return true;
}
list.append('super');
list.append('summer');
list.append('cool');
list.appendBiggest('yes');
console.log(list.toString());
list.appendBiggest('fuck');
list.appendSmallest('right');
console.log(list.toString());
list.appendSmallest('asm');
console.log(list.toString());

function Person(name, gender){
	this.name = name;
	this.gender = gender;
}

var personList = new List.object();
personList.append(new Person('Flippy', 'male'));
personList.append(new Person('Mannix', 'male'));
personList.append(new Person('Edwin', 'male'));
personList.append(new Person('Jonathan', 'male'));
personList.append(new Person('Mary', 'female'));
personList.append(new Person('Queen', 'female'));
personList.append(new Person('Young', 'female'));
personList.append(new Person('Swift', 'female'));
personList.append(new Person('Stern', 'female'));
personList.append(new Person('Jinping Xi', 'male'));

personList.printSameGender = function(g) {
	this.forEach(function(v){
		if(v.gender == g){
			console.log(v.name);
		}
	});
};

personList.printSameGender('male');
personList.printSameGender('female');
