//var null = 1; 报错
//console.log(null);

//if(a.name == undefined){ //error a is not defined
//    console.log("undefined");
//}

//if(typeof(a.name) == "undefined"){ // error a is not defined
//    console.log("typeof object undefined");
//}

if(typeof(name) == "undefined"){
    console.log("typeof undefined");
}

var a;

if(typeof(a) == "undefined"){
    console.log("a undefined");
}

var undefined = 1;
console.log(undefined);

var s = new String();
console.log(typeof(s));
console.log(s instanceof String);

var s2 = "aaa";
console.log(typeof(s2));
console.log(s2 instanceof String);

var n = new Number();
console.log(typeof(n));
console.log(n instanceof Number);

var f = function(){}
console.log(typeof(f));
console.log(f instanceof Function);

var f2 = new Function();
console.log(typeof(f2));
console.log(f2 instanceof Function);

var u = undefined;
console.log(typeof(u));
//console.log(u instanceof Undefined); //error Undefind is not defined`

//var u = new Undefined();
//console.log(typeof(u));
//console.log(u instanceof Undefined);

function classOf(value) {
    return Object.prototype.toString.call(value);
}

console.log(classOf(new String("")));
console.log(classOf(""));

console.log(null == false);
console.log(!null);

console.log(!{});

console.log(!!null);

var array = ['i','love','you'];

for(i in array){
    console.log(classOf(i));
    console.log(i + ':' + array[i]);
}
