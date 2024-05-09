/*
--------------------------------------------------------------------------------------
1.Dato un array di numeri, triplica ciascun numero presente nell'array.
--------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

function triplicate (element,index,array){
    return element * 3; 
};
const numberstriplicate = numbers.map(triplicate);
console.log(numberstriplicate);

--------------------------------------------------------------------------------------
2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.
--------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 23];
function oddFunc(element, index, array) {
  if (element % 2 != 0 && element > 3) {
    return element;
  }
}
const oddNumbers = numbers.filter(oddFunc);
console.log(oddNumbers);

--------------------------------------------------------------------------------------
3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.
--------------------------------------------------------------------------------------

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];

const value = people.find(lessThanEighteen);
function lessThanEighteen(element, index, array) {
  if (element.age < 18) {
    return true;
  } else return false;
}
console.log(value);


--------------------------------------------------------------------------------------
4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.
--------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
const value = numbers.reduce(sum,0);
function sum(acc,element,index,array){
    acc = acc + element;
    return acc;
};
console.log(value);


--------------------------------------------------------------------------------------
5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.
--------------------------------------------------------------------------------------

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];

const value = people.findIndex(ageRange);
function ageRange(element,index,array){
    if (element.age >= 18 && element.age <= 24)
        {return true;}
    else return false;
}
console.log(value);

--------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------
Esercizi Complessi
--------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------
Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.
--------------------------------------------------------------------------------------

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
];

const peopleOver20 = people.filter(over20).map(over20);
function over20(element,index,array){
    if (element.age > 20){
        return element.name;
    }
}

--------------------------------------------------------------------------------------
Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice
--------------------------------------------------------------------------------------

// Data un array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
]; 

const value = purchases.filter(priceAlice).map(priceAlice);
function priceAlice(element,index,array){
if (element.customer === 'Alice')
    return element.price; 
};

const totalSum = value.reduce(sum,0);
function sum(acc,element,index,array){
    acc = acc + element;
    return acc;
};

console.log(totalSum);

--------------------------------------------------------------------------------------
3.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B
--------------------------------------------------------------------------------------

const people = ['Alice', 'Bob', 'Charlie', 'Alice'];

const value = people.findIndex(firstB); 
function firstB(element,index,array){
    if (element.startsWith('B')){
        return true;
    }
    else return false; 
};
console.log(value);


--------------------------------------------------------------------------------------
4. Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e
--------------------------------------------------------------------------------------

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
const wordsWithE = words.filter(functE);
function functE(element,index,array){
    if (element.startsWith('e')){
        return element;
    }
};

const value = wordsWithE.toString().length;
console.log(value);

--------------------------------------------------------------------------------------
5. Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.
--------------------------------------------------------------------------------------

const numbers = [1, 4, 9, 16, 25]; 

*/
