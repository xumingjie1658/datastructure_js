var Queue = require('./queue');

var queue = new Queue.object();
queue.enqueue('A');
console.log(queue.toString());
queue.enqueue('B');
console.log(queue.toString());
queue.enqueue('C');
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());