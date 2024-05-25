/**
 * Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.
 *
 *
 * const people = [
 * { name: 'Alice', age: 25 },
 * { name: 'Bob', age: 17 },
 * { name: 'Charlie', age: 20 },
 * { name: 'David', age: 30 }
 * ];
 *
 * @format
 */

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];

function onMap(el, index, array) {
  if (el.age > 20) return el.name;
}

function onFilter(el, index, array) {
  if (el == undefined) return false;
  else return true;
}

const newPeople = people.map(onMap).filter(onFilter);

console.log(newPeople);
