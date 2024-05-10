/** @format */

// Esercizi Semplici

// 1.Dato un array di numeri, triplica ciascun numero presente nell'array.

const numbers = [1, 2, 3, 4, 5];

function triple(element, index, array) {
  return element * 3;
}

const tripleNumbers = numbers.map(triple);

console.log(tripleNumbers);

// 2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 23];

function odd(element, index, array) {
  if (element % 2 != 0 && element > 3) return true;
  return false;
}

const oddNumbers = numbers2.filter(odd);

console.log(oddNumbers);

// 3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

function underage(element, index, array) {
  if (element.age < 18) return true;
  return false;
}

const underagePeople = people.find(underage);

console.log(underagePeople);

// 4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.

const numbers3 = [1, 2, 3, 4, 5, 5, 200, 23];

function sum(acc, element, index, array) {
  acc += element;
  return acc;
}

const sumArray = numbers3.reduce(sum, 0);

console.log(sumArray);

// 5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.

const people2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

function index(element, index, array) {
  if (element.age >= 18 && element.age <= 24) return true;
  return false;
}

const peopleIndex = people2.findIndex(index);

// Esercizi Complessi

// 1.Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.

const people3 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];

function over20(element, index, array) {
  if (element.age > 20) return element.name;
}

const nameOver20 = people3.filter(over20);

nameOver20.map(over20);

// 2.Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

function totalPrice(acc, element, index, array) {
  if (element.customer === 'Alice') return (acc += element.price);
  return acc;
}

const alicePurchases = purchases.filter(totalPrice).map(totalPrice).reduce(totalPrice, 0);

//  3.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B

const people4 = ['Alice', 'Bob', 'Charlie', 'Alice'];

function indexB(element, index, array) {
  if (element.startsWith('B')) return true;
  return false;
}

const nameB = people4.findIndex(indexB);

// 4.Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function findE(element, index, array) {
  if (element.startsWith('e')) return element;
}

function sumLength(acc, element, index, array) {
  acc += element.length;
  return acc;
}

const letterE = words.filter(findE).reduce(sumLength, 0);

console.log(letterE);

// 5.Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.

const numbers4 = [1, 4, 9, 16, 25];

function sumSqrt(acc, element, index, array) {
  acc += Math.sqrt(element);
  return acc;
}

const root = numbers4.reduce(sumSqrt, 0);

console.log(root);
