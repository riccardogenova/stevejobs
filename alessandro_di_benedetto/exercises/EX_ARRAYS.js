/** @format */

//5
const people = [
  { name: 'Alice', age: '25' },
  { name: 'Bob', age: '17' },
  { name: 'Charlie', age: '20' },
];

function onFind(elements, index, array) {
  if (elements.age >= 18 && elements.age <= 24) {
    return true;
  } else return false;
}

people.findIndex(onFind);

//4
const numbers = [1, 2, 3, 4, 5];

function onReduce(acc, elements, index, array) {
  acc = index + elements;
  return acc;
}

numbers.reduce(onReduce, 0);

//3
const people = [
  { name: 'Alice', age: '25' },
  { name: 'Bob', age: '17' },
  { name: 'Charlie', age: '20' },
];

function onFind(elements, index, array) {
  if (elements.age < 18) {
    return elements.name;
  }
}

people.find(onFind);
//2
const numbers = ['1', '2', '3', '4', '5'];

function onFilter(elements, index, array) {
  if (elements % 2 == 1 && elements > 3) {
    return elements;
  }
}

numbers.filter(onFilter);
//1
const numbers = ['1', '2', '3', '4'];

function onMap(elements, index, array) {
  return elements * 3;
}

numbers.map(onMap);

//6
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];
const people2 = [];

function onFilter(elements, index, array) {
  if (elements.age >= 20) {
    people2.push(elements.name);
  }
}

people.filter(onFilter);

//7

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

function onReduce(acc, elements, index, array) {
  if (elements.customer == 'Alice') {
    acc = elements.price + acc;
  }
  return acc;
}

purchases.reduce(onReduce, 0);

//8
const people = ['Alice', 'Bob', 'Charlie', 'Alice'];

function onFindIndex(elements, index, array) {
  if (elements.startsWith('B')) {
    return true;
  } else return false;
}

people.findIndex(onFindIndex);

//9

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function onReduce(acc, elements, index, array) {
  if (elements.startsWith('e')) {
    acc = elements.length + acc;
  }
  return acc;
}

words.reduce(onReduce, 0);
