//对象数组
function Point(x,y) {
	this.x = x;
	this.y = y;
}

var p1 = new Point(1,2);
var p2 = new Point(2,3);
var p3 = new Point(3,4);

var points = [p1,p2,p3];

console.log(points);

points.push(new Point(4,5));

console.log(points);

//对象中的数组
function weekTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(temp) {
	this.dataStore.push(temp);
}

function average() {
	var total = 0;
	for(var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(53);
thisWeek.add(54);
thisWeek.add(55);
thisWeek.add(56);
thisWeek.add(57);
thisWeek.add(58);
thisWeek.add(59);
thisWeek.add(60);

console.log(thisWeek.average());