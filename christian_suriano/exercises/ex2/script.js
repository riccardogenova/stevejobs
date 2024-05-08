//----------------------esercizi----------------------//
//1.Dato un array di numeri, triplica ciascun numero presente nell'array.
const numbers = [1, 2, 3, 4, 5];
function onMap(el, index, array) {
  return el * 3;
}
const newArray = numbers.map(onMap);

// 2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers = [1, 2, 3, 4, 5, 6, 7, 23];
function onFilter(el, index, array) {
  if (el % 2 !== 0 && el > 3) return true;
  else return false;
}
const newArray = numbers.filter(onFilter);
