//使用split生成数组
var sentence = "Hello World I love the world";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++){
	console.log("word" + i + ": " + words[i]);
}