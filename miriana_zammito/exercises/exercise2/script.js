// Esercizio 1: Aggiungi un elemento all'inizio e alla fine di un array.
let array1 = [2, 3, 4];
array1.unshift(1); // Aggiunge all'inizio
array1.push(5); // Aggiunge alla fine

console.log(array1);

// Esercizio 2: Rimuovi il primo e l'ultimo elemento di un array.
let array2 = [1, 2, 3, 4, 5];
array2.shift(); // Rimuove il primo elemento
array2.pop(); // Rimuove l'ultimo elemento

console.log(array2);

// Esercizio 3:  Crea una funzione che prenda un array di parole e le unisca tutte in una singola stringa, separandole con una virgola.
const array3 = ["yellow", "white", "pink", "black"];
let testo = array3.toString();

console.log(testo);

// Esercizio 4: Crea una funzione che trovi il valore massimo in un array di numeri.
function findMax(array4) {
  return Math.max(...array4); // trova il massimo dell'array
}

let number = [1, 2, 3, 4, 5];
let max = findMax(number);

console.log(max);

// Esercizio 5: Implementa una funzione che trovi il valore minimo in un array di numeri.
function findMin(array5) {
  return Math.min(...array5); // trova il minimo dell'array
}

let number2 = [1, 2, 3, 4, 5];
let min = findMin(number2);
console.log(min);

// Esercizio 6:  Scrivi una funzione che prenda un array di numeri e restituisca la somma di tutti gli elementi.
function sumArray(array6) {
  return array6.reduce(function (sum, element) {
    // reduce somma ogni numero all'accumulatore
    return sum + element;
  });
}

let number3 = [1, 2, 3, 4];
let sum = sumArray(number3);
console.log(sum);

// Esercizio 7: Scrivi una funzione che, dato un array di numeri, restituisca un array contenente solo i numeri pari.
function findEven(array7) {
  return array7.filter(function (element) {
    //filter verifica se un elemento è pari utilizzando l'operatore modulo %
    return element % 2 === 0;
  });
}

const number4 = [1, 2, 3, 4, 5, 6];
const evenNumber = findEven(number4);
console.log(evenNumber);

// Esercizio 8: Realizza una funzione che prenda due array e li unisca in un unico array.

const femaleNames = ["Laura", "Giulia", "Chiara"];
const maleNames = ["Gioele", "Luca", "Marco"];

const allNames = femaleNames.concat(maleNames);

console.log(allNames);

// Esercizio 9: Riordina un array in ordine alfabetico
let names = ["Miriana", "Andrea", "Silvia"];
names.sort();

console.log(names);

// Esercizio 10: Crea una funzione che elimini i duplicati da un array.
function removeDuplicate(array10) {
  return [...new Set(array10)];
}

const duplicate = [1, 2, 3, 1];
const unduplicated = removeDuplicate(duplicate);

console.log(unduplicated);
