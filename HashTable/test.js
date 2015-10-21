var HashTable = require('./HashTable');

var hashTable = new HashTable.object();

hashTable.insert('xmj');
hashTable.printAll();
hashTable.insert('xumingjie');
hashTable.printAll();
hashTable.insert('jmx');
hashTable.printAll();
hashTable.insert('xumjieing');
hashTable.insert('xumjingie');
hashTable.insert('xujinmgie');
hashTable.printAll();
console.log(hashTable.search('xujinmgie'));
console.log(hashTable.search('aaaa'));
hashTable.remove('xumjingie');
hashTable.printAll();
console.log(hashTable.search('xumjingie'));