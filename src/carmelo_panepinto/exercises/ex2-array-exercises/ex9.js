/**
 * Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e
 *
 *
 * const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
 *
 * @format
 */

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function onFilter(el) {
  if (el[0] === 'e') return true;
  else return false;
}

const newWords = words.filter(onFilter);

function onReduce(acc, el) {
  return acc + el.length;
}

console.log(newWords.reduce(onReduce, 0));
