/**
 * Dato un array di numeri, triplica ciascun numero presente nell'array.
 *
 * const numbers = [1, 2, 3, 4, 5];
 *
 * @format
 */

const numbers = [1, 2, 3, 4, 5];

function onMap(el, index, array) {
  return el * 3;
}

const newNumbers = numbers.map(onMap);

console.log(newNumbers);
