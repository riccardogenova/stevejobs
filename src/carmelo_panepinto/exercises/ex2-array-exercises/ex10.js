/**
 * Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.
 *
 *
 * const numbers = [1, 4, 9, 16, 25];
 *
 * @format
 */

const numbers = [1, 4, 9, 16, 25];

function onMap(el) {
  return el ** 0.5;
}

const newNumbers = numbers.map(onMap);

function onReduce(acc, el) {
  return acc + el;
}
console.log(newNumbers.reduce(onReduce, 0));
