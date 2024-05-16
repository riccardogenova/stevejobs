<!-- @format -->

# JavaScript Sheet

## Utilizzo di window e document

- window.alert(): Visualizza un messaggio in una finestra di avviso.
- window.prompt(): Visualizza una finestra di dialogo per l'input dell'utente.
- window.confirm(): Visualizza una finestra di conferma per richiedere l'input dell'utente.
- document.getElementById(): Seleziona un elemento HTML tramite l'ID.
- document.querySelector(): Seleziona il primo elemento HTML che corrisponde al selettore CSS specificato.
- document.querySelectorAll(): Seleziona tutti gli elementi HTML che corrispondono al selettore CSS specificato.

## Variabili (const, var, let)

- const: Definisce una variabile con un valore costante che non può essere modificato.
- var: Definisce una variabile con uno scope di funzione o globale (prima di ES6).
- let: Definisce una variabile con uno scope di blocco.

```JavaScript
// Dichiarazione di variabili
const nome = "Mario";
let numero = 10;
```

## Funzioni

- Dichiarazione di una funzione: \

```JavaScript
function nomeFunzione() {}
```

- Chiamata di una funzione:

```JavaScript
nomeFunzione()
```

```JavaScript
// Funzione
function saluta() {
    console.log("Ciao, " + nome);
}
// Chiamata
saluta();
```

- Funzioni anonime

```JavaScript
// Funzione anonima assegnata a una variabile
const somma = function(a, b) {
    return a + b;
};
console.log(somma(3, 5)); // Output: 8
```

Le funzioni di **ordine superiore** in JavaScript sono funzioni che possono accettare altre funzioni come argomenti e/o restituire una funzione come risultato. Questo concetto è fondamentale nella programmazione funzionale e consente una maggiore flessibilità e modularità nel codice.

- **Passaggio di una funzione come argomento**

```JavaScript
function applicaOperazione(num, operazione) {
  return operazione(num);
}

function doppio(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

console.log(applicaOperazione(5, doppio)); // Output: 10
console.log(applicaOperazione(5, triplo)); // Output: 15
```

In questo esempio, `applicaOperazione` è una funzione di ordine superiore che accetta un numero e una funzione operazione, quindi applica questa operazione al numero.

- **Restituzione di una funzione da un'altra funzione**

```JavaScript
function creaIncrementatore(incremento) {
  return function(x) {
    return x + incremento;
  };
}

const incrementaDiDue = creaIncrementatore(2);
console.log(incrementaDiDue(5)); // Output: 7
console.log(incrementaDiDue(10)); // Output: 12
```

In questo esempio, `creaIncrementatore` è una funzione di ordine superiore che restituisce una nuova funzione che aggiunge l'incremento specificato a un dato numero.

## Array

- const arrayName = [];: Definisce un array costante.
- let arrayName = [];: Definisce un array con possibilità di modifica.

```JavaScript
// Definizione di un array costante vuoto
const example = [];
console.log("Array vuoto:", example);

// Definizione di un array costante non riasssegnabile
const example2 = ["nome", "cognome"];
console.log("Array:", example2);

// Lettura del contenuto dell'array
console.log("Elemento 1:", example2[0]); //nome
console.log("Elemento 2:", example2[1]); //cognome

// Un array può contenere stringhe, numeri, altri array
const mixedArray = ["stringa", 123, ["nested", "array"]];
console.log("Array misto:", mixedArray);

// Accesso agli elementi di un array annidato
console.log("Primo elemento dell'array annidato:", mixedArray[2][0]);

// Metodi degli array: push e spread operator
const numeri = [1, 2, 3];
numeri.push(4); // Aggiunge un elemento in coda all'array
console.log("Array dopo push:", numeri);

const numeri2 = [5, 6, 7];
const mergedArray = [...numeri, ...numeri2]; // Spread operator per unire due array
console.log("Array unito:", mergedArray);

// Array mutabili vs non mutabili
const arrayMutabile = [1, 2, 3];
arrayMutabile.push(4); // Modifica l'array originale
console.log("Array mutabile:", arrayMutabile);

const arrayImmutabile = [1, 2, 3];
const newArray = [...arrayImmutabile, 4]; // Crea un nuovo array con l'elemento aggiunto
console.log("Nuovo array immutabile:", newArray);
console.log("Array immutabile originale:", arrayImmutabile);

// Array split (string to array)
let citta = 'Milano,Torino,Roma,Venezia,Napoli';
let citta2 = citta.split(','); //quando trova la virgola separa e diventa array
console.log(citta2);

// Array join (array to string)
let citta3 = ['Milano', 'Torino', 'Roma', 'Venezia', 'Napoli'];
let citta4 = citta3.split(','); //così si trasforma in stringa
console.log(citta4);
```

## Operatori

- Operatori di confronto: ==, ===, !=, !==, >, <, >=, <=.

```JavaScript
// ==
console.log(5 == "5"); // true, confronto tra valore, converte il tipo
// ===
console.log(5 === "5"); // false, confronto tra valore e tipo
// !=
console.log(5 != "5"); // false, confronto tra valore, converte il tipo
// !==
console.log(5 !== "5"); // true, confronto tra valore e tipo
// >
console.log(5 > 3); // true
// <
console.log(5 < 3); // false
// >=
console.log(5 >= 5); // true
// <=
console.log(5 <= 5); // true
```

- Operatori aritmetici: +, -, \*, /, % (modulo).\
  **Ricordarsi che moltiplicazioni e divisioni hanno la precedenza su addizioni e sottrazioni.**\
  - Operatore di incremento ++ \
  - Operatore di decremento --

```JavaScript
// +
console.log(5 + 3); // 8
// -
console.log(5 - 3); // 2
// *
console.log(5 * 3); // 15
// /
console.log(10 / 2); // 5
// % modulo
console.log(10 % 3); // 1, resto della divisione intera di 10 per 3
//per i decimali dopo la virgola usare toFixed()
let decimali = 0.1 + 0.2;
console.log(decimali.toFixed(2));
//da stringa a numero
let numero14 = "14";
console.log(Number(numero14) + 2);
```

- Operatori logici: && (AND), || (OR), ! (NOT).

```JavaScript
// &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
// ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
// !
console.log(!true); // false
console.log(!false); // true
```

## Stringhe

- A singoli apici a doppi apici

```JavaScript
let testo = 'Stringa a singolo apice'
console.log(testo)

testo = "Stringa a doppi apici da utilizzare con gli apostrofi"
console.log(testo)
```

- Concatenare le stringhe

```JavaScript
let nome = "Mario"
let testo = "Ciao sono " + nome;
console.log(testo);
```

- Da stringa a numero e viceversa

```JavaScript
//da stringa a numero
let testoNumero = Number('56') + 56; //'56' verrà convertito in numero

//da numero a stringa
let numero = 56;
let testoNumero = '56' + numero.toString();
```

- template literals:\
  permettono di creare e poter inserire ina una stringa funzioni e variabili.

```JavaScript
let testo = "Ciao sono una variabile"
//il testo della variabile viene inserito tramite il literals
let elemento = `<h1>${testo}</h1>`

//si inietta il codice con
document.body.innerHTML = elemento;
```

### Metodi per le stringhe

- Per javaScript una stringa è un oggetto, ed ha dei metodi e delle funzioni

  - Lunghezza di una stringa

  ```JavaScript
  let stringa = "Testo sul quale opereremo"

  console.log(stringa.length) //numero di caratteri della stringa o lunghezza della stringa

  // la stringa può essere anche trattata come un array ed utilizzare gli indici
  console.log(stringa[0]) // restituirà il primo carattere `T`
  console.log(stringa[stringa.length-1]) //restituisce l'ultima lettera
  // questo perché non sapendo quanto sia lunga la stringa, prendiamo la lunghezza della stringa -1
  ```

  - Replace per sostituire testo

    ```JavaScript
    let stringa = "Testo sul quale opereremo"
    console.log(stringa.replace("quale", "ciao"))
    //sostituirà `quale` con `ciao`
    ```

## Strutture di controllo

- if, else if, else: Per eseguire un blocco di codice condizionale.

```JavaScript
// Struttura di controllo if
if (numero > 5) {
     console.log("Il numero è maggiore di 5");
} else {
    console.log("Il numero è minore o uguale a 5");
}
```

- switch, case, default: Per eseguire un blocco di codice in base al valore di una variabile.

```JavaScript
// Struttura di controllo switch
switch (numero) {
  case 1: \
    console.log("Uno");
    break;
  case 2:
    console.log("Due");
    break;
  default:
    console.log("Numero sconosciuto");
    break;
}
// Struttura di controllo con stringa
let stringa = 'Marco'
switch (stringa) {
  case 'Marco': \
    console.log("Sono Marco");
    break;
  case 'Luca':
    console.log("Sono Luca");
    break;
  default:
    console.log("Nome sconosciuto");
    break;
}
```

- Ternary operator: per usare una condizione nella variabile

```JavaScript
let numero =15;
// (condizione numero minore di 20) ? se si 'Luca' : se no 'Leonardo'
let nome = (numero < 20) ? 'Luca' : 'Leonardo'; // quindi Luca
```

- while: Per eseguire un blocco di codice fintanto che una condizione è vera.

```JavaScript
let count = 0;
// Esegue il blocco di codice fintanto che count è minore di 5
while (count < 5) {
  console.log("Count:", count);
  count++; // Incrementa count ad ogni iterazione
}
```

- do while: Per eseguire un blocco di codice almeno una volta, quindi fintanto che una condizione è vera.

```JavaScript
let count = 0;
// Esegue il blocco di codice almeno una volta, quindi fintanto che count è minore di 5
do {
  console.log("Count:", count);
  count++; // Incrementa count ad ogni iterazione
} while (count < 5);
```

- for: Per iterare su una serie di istruzioni per un numero di volte specificato.

```JavaScript
// Ciclo for
let colori = ['bianco', 'rosso', 'blu', 'verde']
for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}
// Ciclo for con arresto
for (let i = 0; i < colori.length; i++) {
  if(colori[i] == 'blu'){
    break; // quando trova blu si interrompe bruscamente
  }
    console.log(colori[i]);
}
// Ciclo for con salto
for (let i = 0; i < colori.length; i++) {
  if(colori[i] == 'blu'){
    continue; // quando trova blu lo salta e va avanti
  }
    console.log(colori[i]);
}
```
