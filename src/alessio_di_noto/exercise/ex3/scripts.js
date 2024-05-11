/** @format */

// Esercizi Semplici

// 1.Dato un array di numeri, triplica ciascun numero presente nell'array.

const numbers_uno = [1, 2, 3, 4, 5];

//---

function onMap(el) {
  return el * 3;
}

const prodotto = numbers_uno.map(onMap);

console.log(prodotto);

//_____________________________________________________________________________________________________

//2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers_due = [1, 2, 3, 4, 5, 6, 7, 23];

//---

function onFilter(el) {
  if (el % 2 !== 0 && el > 3) return true;
}

const newArray_due = numbers_due.filter(onFilter);

console.log(newArray_due);

//_____________________________________________________________________________________________________

//3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

//---

function onFind(el) {
  if (el.age < 18) return true;
}

const newArray_tre = people.find(onFind);

console.log(newArray_tre);

//_____________________________________________________________________________________________________

//4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.

const numbers_tre = [1, 2, 3, 4, 5, 5, 200, 23];

//---

function onReduceUno(acc, el) {
  acc = acc + el;
  return acc;
}

const a = numbers_tre.reduce(onReduceUno, 0);

console.log(a);

//_____________________________________________________________________________________________________

//5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.

const people_uno = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

//---

function onReduce_due(a, el, index) {
  if (el.age > 18 && el.age < 24) {
    a = [...a, index];
  }
  return a;
}

const newArray_cinque = people_uno.reduce(onReduce_due, []);

console.log(newArray_cinque);

//_____________________________________________________________________________________________________

//Esercizi Complessi

//1.Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.

const people_due = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];

//---

function onReduceTre(a, el) {
  if (el.age > 20) {
    a = [...a, el.name];
  }
  return a;
}

const newArray_sei = people_due.reduce(onReduceTre, []);
console.log(newArray_sei);
//______________________________________________________________________________________________________

//2.Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

//---

function onReduceDue(acc, el) {
  if (el.customer === 'Alice') {
    acc = acc + el.price;
  }
  return acc;
}

const newArray_sette = purchases.reduce(onReduceDue, 0);
console.log(newArray_sette);

//_______________________________________________________________________________________________________
//3.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B

const peopleQuattro = ['Alice', 'Bob', 'Charlie', 'Alice'];

function onIndex(el) {
  if (el.startsWith('B')) return true;
}
const indexTest = peopleQuattro.findIndex(onIndex);

console.log(indexTest);

//_______________________________________________________________________________________________________
//4.Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function onReduceNono(acc, el) {
  if (el.startsWith('e')) {
    acc = acc + el.length;
  }
  return acc;
}

const testArraySomma2 = words.reduce(onReduceNono, 0);

console.log(testArraySomma2);

//_______________________________________________________________________________________________________
//5.Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.

const numbers = [1, 4, 9, 16, 25];

function onMapCinque(el) {
  const a = Math.sqrt(el);
  return a;
}
const sqrt = numbers.map(onMapCinque);
function onReduce(acc, el) {
  return (acc = acc + el);
}

const sqrtSomma = sqrt.reduce(onReduce, 0);

console.log(sqrtSomma);
