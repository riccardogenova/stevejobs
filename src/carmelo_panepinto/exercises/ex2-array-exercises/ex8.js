/**
 * Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B
 *
 * const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
 *
 * @format
 */

const people = ['Alice', 'Bob', 'Charlie', 'Alice'];

function onFind(el, index) {
  if (el[0] === 'B') {
    console.log(index);
    return index;
  }
}

people.find(onFind);
