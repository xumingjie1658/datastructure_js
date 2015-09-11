var List = require('./list');
var list = new List.object();
list.append('Do one thing at a time, and do well');
list.append('Never forget to say “thanks”.');
list.append('Keep on going never give up.');
list.append('Whatever is worth doing is worth doing well.');
list.append('Believe in yourself.');
list.append('I can because i think i can.');
list.append('Action speak louder than words.');
list.append('Never say die.');
list.forEach(function(s){
	console.log(s);
});
for(list.front(); list.currPos() < list.length(); list.next()){
	console.log(list.getElement());
}
list.remove('Believe in yourself.');
list.forEach(function(s){
	console.log(s);
})
console.log(list.contains('Believe in yourself.'));
console.log(list.length());
list.insert('I love you','Believe in yourself.');
console.log(list.length());
list.insert('Believe in yourself.','I can because i think i can.');
console.log(list.length());
list.front();
console.log(list.getElement());
list.moveTo(2);
console.log(list.getElement());