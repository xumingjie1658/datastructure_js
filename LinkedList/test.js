var LinkedList = require('./LinkedList');

var linkedList = new LinkedList.object();

linkedList.insert(1, 'head');
linkedList.printAll();
linkedList.insert(2, 1);
linkedList.printAll();
linkedList.insert(4, 2);
linkedList.printAll();
linkedList.insert(5, 2);
linkedList.printAll();

linkedList.remove(2);

linkedList.printAll();

linkedList.remove(5);

linkedList.printAll();