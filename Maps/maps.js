const map1 = new Map();

//establezco una key y un value
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

//aquí obtengo el valor de la llave 'a'
console.log(map1.get('a'));

map1.set('a', 97);
console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b');

console.log(map1.size);

