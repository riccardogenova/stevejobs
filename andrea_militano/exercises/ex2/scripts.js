//EX 1
const array = [10, 5, 6, 1, 4, 4, 0, 69];
let j;
for (let i = 0; i < array.length - 1; i++) {
  j = array[i];
  if (array[i + 1] > array[i]) {
    j = array[i + 1];
  }
}
console.log(j);
