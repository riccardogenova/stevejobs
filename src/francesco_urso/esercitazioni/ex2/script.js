/** @format */

// Inserire i 10 esercizi

// Ordinamento di un array di numeri in ordine decrescente
const numeri = [3, 1, 5, 2, 4];
console.log('Array non ordinato', numeri);
const numOrdinati = numeri.sort((a, b) => a - b);
console.log('Array ordinato:', numOrdinati); // Output: [1, 2, 3, 4, 5]

console.log('-----------------');

// Creazione di un array di parole in ordine alfabetico
const parole = ['cane', 'gatto', 'cavallo', 'elefante'];
console.log('Array non ordinato:', parole);
const ordinate = parole.sort();
console.log('Array ordinato:', ordinate); // Output: ["cane", "cavallo", "elefante", "gatto"]

console.log('-----------------');

// Creazione di un array di oggetti in base al valore di una proprietà
const oggetti = [
  { nome: 'cane', eta: 5 },
  { nome: 'gatto', eta: 7 },
  { nome: 'cavallo', eta: 3 },
  { nome: 'elefante', eta: 4 },
];

console.log('Array non ordinato:', oggetti);

const ordinati = oggetti.sort((a, b) => a.eta - b.eta);
console.log('Array ordinato:', ordinati); // Output: [{nome: 'cavallo', eta: 3}, {nome: 'cane', eta: 5}, {nome: 'elefante', eta: 4}, {nome: 'gatto', eta: 7}]
