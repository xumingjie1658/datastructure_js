var nums = [1,2,3,4,5];

for(var i = 0; i < nums.length; i++){
	console.log(nums[i]);
	nums[i] = nums[i] + 1;
}

//for..in是遍历某个对象的所有属性，在js中数组也是一个对象，而索引为该对象的属性（字符串）
for(var item in nums){
	console.log(nums[item]);
}
