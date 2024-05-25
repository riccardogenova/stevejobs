/**
 * Dato un array di numeri, calcola la somma di tutti i numeri nell'array.
 *
 * const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
 *
 * @format
 */

const numbers = [1, 2, 3, 4, 5, 5, 200, 23];

function onReduce(acc, el) {
  return (acc = acc + el);
}

console.log(numbers.reduce(onReduce, 0));
