/** @format */

//----------------------esercizi----------------------//
//1.Dato un array di numeri, triplica ciascun numero presente nell'array.
const numbers = [1, 2, 3, 4, 5];
function onMap(el) {
  return el * 3;
}
const newArray = numbers.map(onMap);
console.log(newArray);
// 2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 23];
function onFilter(el) {
  if (el % 2 !== 0 && el > 3) return true;
  else return false;
}
const newArray2 = numbers2.filter(onFilter);
console.log(newArray2);
