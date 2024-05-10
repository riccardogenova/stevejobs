/** @format */

//5
const people = [
  { name: 'Alice', age: '25' },
  { name: 'Bob', age: '17' },
  { name: 'Charlie', age: '20' },
];

function onFind(elements) {
  if (elements.age >= 18 && elements.age <= 24) {
    return true;
  } else return false;
}

people.findIndex(onFind);

//4
const numbers2 = [1, 2, 3, 4, 5];

function onReduce(acc, elements, index) {
  acc = index + elements;
  return acc;
}

numbers2.reduce(onReduce, 0);

//3
const people2 = [
  { name: 'Alice', age: '25' },
  { name: 'Bob', age: '17' },
  { name: 'Charlie', age: '20' },
];

function onFind2(elements) {
  if (elements.age < 18) {
    return elements.name;
  }
}

people2.find(onFind2);
//2
const numbers3 = ['1', '2', '3', '4', '5'];

function onFilter(elements) {
  if (elements % 2 == 1 && elements > 3) {
    return elements;
  }
}

numbers3.filter(onFilter);
//1
const numbers4 = ['1', '2', '3', '4'];

function onMap(elements) {
  return elements * 3;
}

numbers4.map(onMap);

//6
// const people4 = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 20 },
//   { name: 'David', age: 30 },
// ];
const people5 = [];

function onFilter3(elements) {
  if (elements.age >= 20) {
    people5.push(elements.name);
  }
}

people5.filter(onFilter3);

//7

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

function onReduce3(acc, elements) {
  if (elements.customer == 'Alice') {
    acc = elements.price + acc;
  }
  return acc;
}

purchases.reduce(onReduce3, 0);

//8
const people6 = ['Alice', 'Bob', 'Charlie', 'Alice'];

function onFindIndex(elements) {
  if (elements.startsWith('B')) {
    return true;
  } else return false;
}

people6.findIndex(onFindIndex);

//9

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function onReduce4(acc, elements) {
  if (elements.startsWith('e')) {
    acc = elements.length + acc;
  }
  return acc;
}

words.reduce(onReduce4, 0);
