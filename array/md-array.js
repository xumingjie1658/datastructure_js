//多维数组
//1.创建
//创建一个每个元素都是数组的数组，这样数组的初始值都是undefined
var twod = [];
var rows = 5;
for(var i = 0; i < rows; ++i){
	twod[i] = [];
}
console.log(twod);

//使用扩展javascript数组对象
Array.matrix = function(numrows, numcols, initial){
	var arr = [];
	for(var i = 0; i < numrows; ++i){
		var columns = [];
		for(var j = 0; j < numrows; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,5,0);
console.log(nums);

//直接用字面量初始化数组，如果数组有初值数组规模较小的情况下使用比较方便
var grades = [[89,77,78],[76,82,81],[91,94,89]];
console.log(grades);

//二维数组的访问
console.log(grades[0].length);
console.log(grades[0][1]);

//参差不齐的数组
var grades = [[89,77],[76,82,81],[91,94,89,99]];