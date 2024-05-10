/** @format */

//----------------------esercizi----------------------//
//1.Dato un array di numeri, triplica ciascun numero presente nell'array.
/*
const numbers = [1, 2, 3, 4, 5];
function onMap(el, index, array) {
  return el * 3;
}
const newArray = numbers.map(onMap);

// 2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers = [1, 2, 3, 4, 5, 6, 7, 23];
function onFilter(el, index, array) {
  if (el % 2 !== 0 && el > 3) return true;
  else return false;
}
const newArray = numbers.filter(onFilter);

//3. Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];
function onFind(el, index, array) {
  if (el.age < 18) return true;
}

const newArray = people.find(onFind);

// 4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.

const numbers = [1, 2, 3, 4, 5, 5, 200, 23];

function onReduce(acc, el, index, array) {
  return acc + el;
}
const newArray = numbers.reduce(onReduce, 0);
// 5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];

function onFind(el, index, array) {
  if (el.age >= 18 && el.age <= 24) return true;
  else return false;
}

const newArray = people.find(onFind);

// 6. Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 30 },
];

function onReduce(acc, el) {
  if (el.age > 20) {
    return acc.concat(el.name);
  } else {
    return acc;
  }
}

const newArray = people.reduce(onReduce, []);

// 7. Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice
const purchases = [
  { customer: "Alice", price: 20 },
  { customer: "Bob", price: 30 },
  { customer: "Alice", price: 15 },
  { customer: "Charlie", price: 25 },
];

function onReduce(acc, el, index, array) {
  if (el.customer === "Alice") acc= acc + el.price;
  else return acc;
}
const newArray = purchases.reduce(onReduce, 0);
console.log(newArray);

// 8. Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B

const people = ["Alice", "Bob", "Charlie", "Alice"];

function onIndex(el, index, array) {
  if (el.substring(0, 1) === "B") return true;
  else return false;
}

const newArray = people.findIndex(onIndex);

// 9. Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e

const words = ["mela", "banana", "gatto", "cane", "elefante"];

function onFind(el, index, array) {
  if (el.substring(0, 1) === "e") return el.length;
  else return false;
}

const newArray = words.find(onFind);

console.log(newArray.length);

// 3.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B
nst people = ["Alice", "Bob", "Charlie", "Alice"];

function onFind(el, index, array) {
  if (el.substring(0, 1) === "B") return true;
  else return false;
}

const newArray = people.findIndex(onFind);

console.log(newArray);


//Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e
*/

const words = ['ela', 'banana', 'gatto', 'cane', 'elefante'];

function onMap(el, index, array) {
  if (el.substring(0, 1) === 'e') return el.length;
  else return false;
}

const newArray = words.map(onMap);

console.log(newArray);
