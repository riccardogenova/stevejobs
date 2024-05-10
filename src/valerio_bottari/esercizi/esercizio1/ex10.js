/** @format */

// Esercizio 1: Creare un array vuoto
let arrayVuoto = [];

console.log(arrayVuoto);

// Esercizio 2: Creare un array con elementi iniziali
let arrayIniziale = [1, 2, 3, 4, 5];

// Esercizio 3: Accedere a un elemento dell'array per indice
console.log(arrayIniziale[2]); // Output: 3

// Esercizio 4: Modificare un elemento dell'array
arrayIniziale[1] = 10;
console.log(arrayIniziale); // Output: [1, 10, 3, 4, 5]

// Esercizio 5: Aggiungere un elemento all'array
arrayIniziale.push(6);
console.log(arrayIniziale); // Output: [1, 10, 3, 4, 5, 6]

// Esercizio 6: Rimuovere l'ultimo elemento dall'array
arrayIniziale.pop();
console.log(arrayIniziale); // Output: [1, 10, 3, 4, 5]

// Esercizio 7: Trovare la lunghezza dell'array
console.log(arrayIniziale.length); // Output: 5

// Esercizio 8: Copiare un array
let arrayCopia = [...arrayIniziale];
console.log(arrayCopia); // Output: [1, 10, 3, 4, 5]

// Esercizio 9: Concatenare due array
let altroArray = [7, 8, 9];
let arrayConcatenato = arrayIniziale.concat(altroArray);
console.log(arrayConcatenato); // Output: [1, 10, 3, 4, 5, 7, 8, 9]

// Esercizio 10: Filtrare elementi dell'array
let arrayNumeri = [15, 20, 25, 30, 35, 40];
let arrayFiltrato = arrayNumeri.filter(num => num > 25);
console.log(arrayFiltrato); // Output: [30, 35, 40]
