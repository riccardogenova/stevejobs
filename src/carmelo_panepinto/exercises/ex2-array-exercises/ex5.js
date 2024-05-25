/**
 * Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.
 *
 * const people = [
 * { name: 'Alice', age: 25 },
 * { name: 'Bob', age: 17 },
 * { name: 'Charlie', age: 20 }
 * ];
 *
 * @format
 */

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

function onFind(el, index, array) {
  if (el.age > 18 && el.age < 25) console.log(index);
}

people.find(onFind);
