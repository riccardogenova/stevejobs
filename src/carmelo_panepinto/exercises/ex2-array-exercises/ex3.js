/**
 * Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.
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
  if (el.age < 18) return el.name;
}

console.log(people.find(onFind));
