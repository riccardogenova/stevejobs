## Documentazione JavaScript

### Introduzione

JavaScript è un linguaggio di programmazione ad alto livello, interpretato e orientato agli oggetti. È comunemente utilizzato per aggiungere interattività e dinamicità alle pagine web. Oltre ad essere ampiamente utilizzato nel contesto dei browser web, JavaScript è diventato uno dei linguaggi di programmazione più popolari e versatili, utilizzato anche nel backend (ad esempio con Node.js) e nello sviluppo di applicazioni desktop e mobili.

### Sintassi Base

```javascript
// Questo è un commento su una singola riga

/*
  Questo è un commento su
  più righe
*/

// Dichiarazione di variabili
var x = 5; // Variabile globale
let y = 10; // Variabile locale (introdotta in ECMAScript 6)
const z = 15; // Costante (non può essere riassegnata)

// Tipi di variabili
// JavaScript è un linguaggio dinamicamente tipizzato, il che significa che il tipo di una variabile è determinato dinamicamente al momento dell'assegnazione.
// I principali tipi di variabili sono:
// - Number: numeri interi o decimali
// - String: sequenze di caratteri
// - Boolean: valore vero o falso
// - Object: strutture dati complesse
// - Array: collezioni di elementi
// - Null: valore nullo
// - Undefined: valore non definito
// - Function: oggetti che consentono di eseguire un blocco di codice

// Dichiarazione di funzioni
function somma(a, b) {
  return a + b;
}

// Chiamata di funzioni
let risultato = somma(x, y);

// Condizioni
if (x > y) {
  console.log("x è maggiore di y");
} else if (x < y) {
  console.log("y è maggiore di x");
} else {
  console.log("x e y sono uguali");
}

// Cicli
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Array
let numeri = [1, 2, 3, 4, 5];
numeri.push(6); // Aggiunge un elemento alla fine dell'array
numeri.pop(); // Rimuove l'ultimo elemento dall'array

// Oggetti
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
};
console.log(persona.nome); // Output: Mario

// Eccezioni
try {
  // Codice che potrebbe generare un'eccezione
} catch (error) {
  // Gestione dell'eccezione
}
```

---

## Var vs Let in JavaScript

In JavaScript, `var` e `let` sono due parole chiave utilizzate per dichiarare variabili. Sebbene entrambe svolgano lo stesso compito di riservare spazio di memoria per le variabili, ci sono alcune differenze chiave tra di loro che influenzano il loro comportamento all'interno del codice.

### 1. Ambito di Visibilità (Scope)

- **`var`**: Le variabili dichiarate con `var` hanno un ambito di visibilità di funzione (function scope). Ciò significa che sono visibili all'interno della funzione in cui sono state dichiarate. Tuttavia, le variabili `var` possono anche essere accessibili al di fuori della loro funzione, poiché non sono limitate all'ambito di blocco.

  ```javascript
  function example() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Output: 10 (var è accessibile fuori dal blocco if)
  }
  ```

- **`let`**: Le variabili dichiarate con `let` hanno un ambito di visibilità di blocco (block scope). Ciò significa che sono visibili solo all'interno del blocco in cui sono state dichiarate. Le variabili `let` non sono accessibili al di fuori del loro blocco di dichiarazione.

  ```javascript
  function example() {
    if (true) {
      let y = 20;
    }
    console.log(y); // Error: y is not defined (let non è accessibile fuori dal blocco if)
  }
  ```

### 2. Sollevamento delle Dichiarazioni (Hoisting)

- **`var`**: Le dichiarazioni delle variabili con `var` vengono "sollevate" (hoisted) al limite superiore del loro contesto di esecuzione (solitamente la funzione in cui sono state dichiarate). Ciò significa che, anche se si fa riferimento a una variabile `var` prima della sua effettiva dichiarazione, il suo valore sarà `undefined`.

  ```javascript
  console.log(x); // Output: undefined (var è sollevata)
  var x = 5;
  ```

- **`let`**: Le dichiarazioni delle variabili con `let` non vengono sollevate (hoisted) al limite superiore del loro blocco di dichiarazione. Ciò significa che non possono essere accessibili prima della loro dichiarazione all'interno del blocco (causando un errore di "ReferenceError" se si tenta di farlo).

  ```javascript
  console.log(y); // Error: y is not defined (let non è sollevata)
  let y = 10;
  ```

### Conclusioni

La scelta tra `var` e `let` dipende dalle esigenze specifiche del tuo codice. In generale, si consiglia di utilizzare `let` anziché `var` per dichiarare variabili quando si programma in JavaScript moderno, poiché `let` offre una maggiore precisione nell'ambito di visibilità e nel comportamento delle variabili rispetto a `var`. Tuttavia, `var` è ancora ampiamente utilizzato e compreso, specialmente in codice legacy.

### Funzioni Principali

#### `parseInt()`

La funzione `parseInt()` converte una stringa in un numero intero. Restituisce il numero intero corrispondente alla stringa, o `NaN` se la stringa non inizia con un numero.

Esempio:

```javascript
let numero = parseInt("10"); // numero sarà 10
```

#### `parseFloat()`

La funzione `parseFloat()` converte una stringa in un numero decimale (a virgola mobile). Restituisce il numero decimale corrispondente alla stringa, o `NaN` se la stringa non inizia con un numero.

Esempio:

```javascript
let numero = parseFloat("10.5"); // numero sarà 10.5
```

#### `isNaN()`

La funzione `isNaN()` determina se un valore è NaN (Non-a-Number). Restituisce `true` se il valore passato non è un numero, altrimenti restituisce `false`.

Esempio:

```javascript
isNaN(10); // false
isNaN("ciao"); // true
```

### Tipizzazione in JavaScript

JavaScript è un linguaggio di programmazione debolmente tipizzato, il che significa che le variabili non sono vincolate a un tipo di dati specifico. La tipizzazione in JavaScript è dinamica, il che significa che il tipo di una variabile può cambiare durante l'esecuzione del programma.

#### Null e Undefined

- `null`: rappresenta un valore nullo o vuoto. Viene utilizzato per indicare l'assenza intenzionale di un valore.
- `undefined`: rappresenta il valore non assegnato o non definito. Quando una variabile è dichiarata ma non inizializzata, il suo valore predefinito è `undefined`.
