//迭代器方法，对数组中得每个元素应用一个函数，可以返回一个值、一组值或者一个新数组
//不生成新数组的迭代器方法
//1. forEach,接受一个函数作为参数，对数组中的每个元素使用该函数
function square(num){
	console.log(num,num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
nums.forEach(function(value, index, array){ //可以通过回调函数的形式操作原数组
	array[index] = value * value;
});
console.log(nums);
//2. every，接受一个返回值为布尔类型的函数，对数组中的每一个元素使用该函数。如果对于所有的元素，该函数均返回true，则该方法返回true
function isEven(num){
	return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
console.log(even);
console.log([1,2,3,4,5].every(function(value,index,array){ // 相邻两个数的和是否全为偶数
	if(index < array.length - 1){
		return (array[index] * array[index + 1]) % 2 == 0;
	}
	else{
		return true;
	}
}));

//3.some，接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回true，则方法返回true
console.log([1,2,3,4,5].every(isEven));
console.log([1,2,3,4,5].some(isEven));
console.log([1,3,5,7,9].some(isEven));

//4.reduce，接受一个函数，返回一个值。该方法会从一个累加值开始，不断对累加值和数组中得后续元素调用该函数，直到数组中得最后一个元素
function add(runningTotal, currentValue){
	return runningTotal + currentValue;
}

function addStr(runningTotal, currentValue){
	return runningTotal + ' ' + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);
var sum = nums.reduce(addStr);
console.log(sum);

//5.reduceRight, 从右到左执行
console.log(nums.reduceRight(addStr));

//生成新数组的迭代器 map & filter
//6.map,对数组中的某个元素使用某个函数，返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果
var grades = [77,65,81,92,83];
var newGrades = grades.map(function(value,index,array){
	return value + 5;
});
console.log(newGrades);

//缩写例子
var words = ['I','Love','The','World'];
var acronym = words.map(function(word){
	return word[0];
});
console.log(acronym);
console.log(acronym.join());
console.log(acronym.join(""));

//7.filter，传入一个返回值为布尔类型的函数，返回该数组包含应用该函数后结果为true的元素
console.log([1,2,3,4,5,6,7,8,9,10].filter(isEven));