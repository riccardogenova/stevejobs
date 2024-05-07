//**Esercizio 1**
// Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.

const array1 = [2, 3, 4, 5, 6, 7]; //definizione di un array

let somma = 0; //definisco un contatore

for (let index = 0; index < array1.length; index++) {
  //creo il ciclo for per la somma degli elementi nell'array

  somma = somma + array1[index];
}

console.log("La somma degli elementi è:", somma); //stampo il valore della somma totale

//---------------------------------------------------------------------------------

//**Esercizio 2**
//Scrivi un programma che prenda un array di numeri e trovi il valore massimo.

const array2 = [2, 3, 4, 20, 6, 7];

let massimo = array2[0];
//oppure let massimo = 0

/*
            for (let index = 0; index < array2.length; index++) {
            if (massimo < array2[index]) {
                massimo = array2[index];
            }
            }
            */

// Metodo alternativo con il for -- of
//Ad ogni iterazione JavaScript assegna alla variabile VALORE il contenuto di ciascun elemento dell'array.
for (let numero of array2) {
  //definisco dentro al for una variabile numero
  if (numero > massimo) {
    massimo = numero;
  }
}
console.log("Il massimo dell'array è :", massimo);

//Metodo alternativo con il for -- in
//A diferrenza del metodo for -- of, il metodo for -- in non considera i valori del vettore ma gli INDICI
for (let valore in array2) {
  if (massimo < array2[valore]) {
    massimo = array2[valore];
  }
}
console.log("Il massimo dell'array è :", massimo);

//------------------------------------------------------------------------------------
/*
Esercizio 3
Scrivi un programma che prenda un array di numeri e trovi il valore minimo.
*/

const array3 = [2, 3, 4, 20, 6, 7];

let minimo = array3[0];
//oppure let massimo = 0

// Metodo alternativo con il for -- of

for (let numero of array3) {
  //definisco dentro al for una variabile numero
  if (numero < minimo) {
    minimo = numero;
  }
}
console.log("Il minimo dell'array è :", minimo);

//--------------------------------------------------------------------------------------
/*
Esercizio 4
Scrivi un programma che prenda un array di numeri e restituisca un nuovo array contenente solo i numeri pari.
*/

const array4 = [5, 44, 3, 6, 88, 90, 7, 13, 17];
const arraypari = []; //definisco un array vuoto
for (let numero of array4) {
  if (numero % 2 === 0) {
    //attraverso il modulo vedo quale ha resto 0 quindi se è pari
    arraypari.push(numero); //inserisco un elemento nell'array
  }
}
console.log("l'array di numeri pari è :", arraypari);

//---------------------------------------------------------------------------------------
