//数组的整体性操作
//一个数组赋给另一个数组
var nums = [];
for(var i = 0; i < 10; ++i){
	nums[i] = i + 1;
}
var samenums = nums;
console.log(samenums);
//注意：当把一个数组赋值给另一个数组时，只是为被赋值的一个数组增加一个引用
nums[0] = 100;
console.log(samenums);//此时，samenums[0]也改变了——浅复制

//深复制
function deepCopy(arr1,arr2){
	for(var i = 0; i < arr1.length; ++i){
		arr2[i] = arr1[i];
	}
}
var deepCopyNums = [];
deepCopy(nums,deepCopyNums);
console.log(deepCopyNums);
nums[0] = 999;
console.log(deepCopyNums);

//然而，上述的深拷贝函数并不支持多维数组
var multiNums = [1,2,[3,4],{a : 3,b : 2}];
var deepCopyMultiNums = [];
deepCopy(multiNums, deepCopyMultiNums);
console.log(deepCopyMultiNums);
multiNums[2][0] = 1000;
multiNums[3]['a'] = 9999;
console.log(deepCopyMultiNums);

//支持多维数组的深拷贝
function completeDeepCopy(src,dst){
	for(var e in src){
		if(src[e] instanceof Array || src[e] instanceof Object){
			dst[e] = (src[e] instanceof Array) ? [] : {};
			arguments.callee(src[e],dst[e]);
		}
		else{
			dst[e] = src[e];
		}
	}
}

var multiNums = [1,2,[3,4],{a : 3,b : 2}];
var deepCopyMultiNums = [];
completeDeepCopy(multiNums, deepCopyMultiNums);
console.log(deepCopyMultiNums);
multiNums[2][0] = 1000;
multiNums[3]['a'] = 9999;
console.log(deepCopyMultiNums);
