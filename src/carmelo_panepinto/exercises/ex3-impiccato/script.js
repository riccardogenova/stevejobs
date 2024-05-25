/** @format */

const parola = ['p', 'a', 'l', 'e', 'r', 'm', 'o'];

let parolaNascosta = ['*', '*', '*', '*', '*', '*', '*'];

const lettera = 'l';

function onMap(el, index) {
  if (parola[index] === lettera) {
    return lettera;
  } else return '*';
}

function gioco(parola, parolaNascosta, lettera) {
  return parolaNascosta.map(onMap);
}

parolaNascosta = gioco(parola, parolaNascosta, lettera);

console.log(parolaNascosta);

/*

function onMap2(el, index, array, word) {
  el = word;
}

function onMap(el, index, array, array2, lettera) {
  if (lettera === el) {
    parolaNascosta.map(onMap2(el2, index, array, lettera));
    console.log(parolaNascosta);
  }
}

parola.map(onMap);
*/
