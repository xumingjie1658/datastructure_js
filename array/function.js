//存取函数
//1.查找元素indexOf
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer","Clayton"];
var searchNames = ["Flippy", "David", "Clayton"];
for(var i = 0; i < searchNames.length; i++){
	var position = names.indexOf(searchNames[i]);//数组中有相同元素,indexOf返回第一个，没有找到返回-1
	console.log("The index of " + searchNames[i] + " in array is " + position);
}

//2.数组的字符串表示 join & toString 各元素之间用逗号分隔
var namestr = names.join();
console.log(namestr);
var namestr = names.toString();
console.log(namestr);

//3.由已有数组创建新的数组 concat & splice
var cisDept = ["Mike", "Clayton"];
var dmpDept = ["Raymond", "Bryan"];
var result = cisDept.concat(dmpDept);//连接
console.log(result);
result = dmpDept.concat(cisDept);
console.log(result);
var spliceResult = result.splice(1,3);//在现有数组中截取
console.log(spliceResult);

//可变函数
//4.为数组添加元素
var nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);//使用push将一个元素添加到数组末尾
console.log(nums);
nums[nums.length] = 7;//使用nums.length在末尾添加数组元素，在js中如果设置某个值的索引超过了数组现有的项数，数组就会自动增加到该索引值加一的长度
console.log(nums);
nums.unshift(0,0,0);
console.log(nums);//使用unshift在数组开头添加元素

//5.从数组中删除元素
nums.pop();//从数组末尾删除元素，返回值为删除的元素
console.log(nums);
nums.shift();//使用shift删除数组元素
var first = nums.shift();//返回值为删除的元素
console.log(nums);
nums.push(first);
console.log(nums);

/*6.在数组中间位置添加删除元素 splice
参数：
1.起始索引
2.需要删除的元素个数（添加元素时设置为0）
3.想要添加进数组的元素
*/
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);
var deletedElements = nums.splice(0,2);//返回值为删除掉得元素
console.log(deletedElements);
console.log(nums);
nums.splice(0,2,0,999,333,666,111);//删除并添加
console.log(nums);

//7.数组排序
nums.reverse();//reverse 翻转数组顺序
console.log(nums);
nums.sort();//注意，是按字典序进行排序，对数字类型支持不好
console.log(nums);
//实现数字排序，传入一个比较函数
function compare(num1, num2){
	return num1 - num2;
}
nums.sort(compare);
console.log(nums);

function descend(num1, num2){
	return num2 - num1;
}
nums.sort(descend);
console.log(nums);