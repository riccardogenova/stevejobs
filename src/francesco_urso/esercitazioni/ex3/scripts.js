/** @format */

//esercitazione 3

function trattini() {
  console.log('------------------------------------------');
}

// Esercizi Semplici
//Numero 1
console.log("1.Dato un array di numeri, triplica ciascun numero presente nell'array.");
const numbers = [1, 2, 3, 4, 5];
//funzione che triplica ogni elemento el per 3
function triplica(el) {
  el = el * 3;
  return el;
}
//Si applica la funzione a tutti gli elementi dell'array
// console.log stampa a video, mentre map restituisce un nuovo array
console.log(numbers.map(triplica));
trattini();

//Numero 2
console.log('2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.');
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 23];
// la funzione per funzionare con .filter utilizza i booleani
function filtra(el) {
  if (el > 3 && el % 2 !== 0) {
    return true;
  }
  return false;
}
console.log(numbers2.filter(filtra));
trattini();

//Numero 3
console.log("3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.");
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];
function inferiore18(el) {
  if (el.age < 18) {
    return true;
  }
  return false;
}
console.log(people.filter(inferiore18));
trattini();

//Esercizio 4
console.log("4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.");
const numbers3 = [1, 2, 3, 4, 5, 5, 200, 23];
function somma(acc, el) {
  acc = acc + el;
  return acc;
}
// .reduce richiede sempre il parametro iniziale accumulatore o valore iniziale
// restituisce un valore e non un array
console.log(numbers3.reduce(somma));
trattini();

//Esercizio 5
console.log("5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.");
const people2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];
function compreso(el) {
  if (el.age <= 18 || el.age >= 24) {
    return false;
  }
  return true;
}
console.log(people2.filter(compreso));
trattini();

// Esercizi Complessi
// Esercizio 6
console.log(
  "6.Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.",
);

const people3 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];
function maggioreDiVenti(el) {
  if (el.age > 20) {
    return true;
  }
  return false;
}
function soloNome(acc, el) {
  return [...acc, el.name];
}

const maggioreVenti = people3.filter(maggioreDiVenti);
const soloNomi = maggioreVenti.reduce(soloNome, []);
console.log(soloNomi);
trattini();

//Esercizio 7
console.log("7.Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice");

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];
function soloPrice(el) {
  if (el.customer === 'Alice') {
    return true;
  }
  return false;
}
function sommaPrice(acc, el) {
  acc = el.price + acc;
  return acc;
}

const soloPrezzi = purchases.filter(soloPrice);
const sommaPrezzi = soloPrezzi.reduce(sommaPrice, 0);
console.log(sommaPrezzi);
trattini();

//Esercizio 8
console.log("8.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B");

const people4 = ['Alice', 'Bob', 'Charlie', 'Alice'];

function inizialeB(el) {
  // Controlla se la prima lettera della stringa è 'B'
  return el[0] === 'B';
}

const letteraB = people4.findIndex(inizialeB);
console.log(letteraB);
trattini();

//Esercizio 9
console.log("9.Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e");

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
function inizialeE(el) {
  // filtra e trova quelli che iniziano per 'e'
  if (el[0] === 'e') {
    return el;
  }
  return;
}
const letteraE = words.filter(inizialeE);
console.log(letteraE);
function conta(acc, el) {
  acc = el.length + acc;
  return acc;
}
const contaLettere = letteraE.reduce(conta, 0);
console.log(contaLettere);
trattini();

//Esercizio 10
console.log(
  "Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.",
);
const numbers4 = [1, 4, 9, 16, 25];
function radice(el) {
  return Math.sqrt(el);
}
const radiceQuadrata = numbers4.map(radice);
console.log(radiceQuadrata);
function contaNumeri(acc, el) {
  return acc + el;
}
const conta2 = radiceQuadrata.reduce(contaNumeri);
console.log(conta2);
