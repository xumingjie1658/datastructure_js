//通过[]操作符声明一个数组
var numbers = [];//该数组的长度为0
console.log(numbers.length);

//直接在[]操作符中放入一组元素
var numbers = [1,2,3,4,5];
console.log(numbers.length);

//调用Array的构造函数创建数组
var numbers = new Array();
console.log(numbers.length);

//调用Array构造函数时传入初值
var numbers = new Array(1,2,3,4,5);
console.log(numbers.length);

//调用Array时指定数组长度
var numbers = new Array(10);
console.log(numbers.length);

//通过isArray判断是否为数组
var number = 3;
var arr = [7,4,1776];
console.log(Array.isArray(number));
console.log(Array.isArray(arr));