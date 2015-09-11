//1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
var Student = function() {
	this.scores = [];
}

Student.prototype = {
	add : function(s){
		this.scores.push(s);
	},
	average : function(){
		var total = 0;
		for ( var i = 0; i < this.scores.length; ++i){
			total += this.scores[i];
		}
		return total / this.scores.length;
	}
}

var Mary = new Student();
Mary.add(90);
Mary.add(100);
console.log(Mary.average());

//2.将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
var words = ['I','LOVE','THE','WORLD'];
console.log(words.sort());
function descendSort(s1,s2){
	return (s2 > s1);
}
console.log(words.sort(descendSort));

//3.
var monthlyTemps = function(){
	this.dataStore = [];
}

monthlyTemps.prototype = {
	add : function(array){
		this.dataStore.push(array);
	},
	monthlyAverage : function(){
		var total = 0;
		var count = 0;
		for(var i = 0; i < this.dataStore.length; ++i){
			for(var j = 0; j < this.dataStore[i].length; ++j){
				total += this.dataStore[i][j];
				++count;
			}
		}
		return total / count;
	},
	weeklyAverage : function(n){
		var total = 0;
		for(var i = 0; i < this.dataStore[n].length; ++i){
			total += this.dataStore[n][i];
		}
		return total / this.dataStore[n].length;
	},
	totalWeeklyAverage : function(){
		var ret = [];
		for(var i = 0; i < this.dataStore.length; ++i){
			var total = 0;
			for(var j = 0; j < this.dataStore[i].length; ++j){
				total += this.dataStore[i][j];
			}
			ret.push(total / this.dataStore[i].length);
		}
		return ret;
	}
};

var w1 = [100,234,32,23];
var w2 = [0,1,2,3];
var w3 = [111,222,333,444];
var w4 = [837,322,445,122];
var month = new monthlyTemps();
month.add(w1);
month.add(w2);
month.add(w3);
month.add(w4);
console.log(month.monthlyAverage());
console.log(month.weeklyAverage(1));
console.log(month.totalWeeklyAverage());

//4.创建一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词
var Chars = function(){
	this.source = [];
}

Chars.prototype = {
	add : function(c){
		this.source.push(c);
	},
	combine : function(){
		return this.source.join("");
	}
}

var word = new Chars();
word.add('F');
word.add('l');
word.add('i');
word.add('p');
word.add('p');
word.add('y');
console.log(word.combine());