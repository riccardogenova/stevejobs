/**
 * Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.
 *
 * const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
 *
 * @format
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 23];

function onFilter(el, index, array) {
  if (el % 2 !== 0 && el > 3) return el;
}

const newNumbers = numbers.filter(onFilter);
console.log(newNumbers);
