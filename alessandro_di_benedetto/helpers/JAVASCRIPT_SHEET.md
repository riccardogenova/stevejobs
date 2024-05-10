## Tipi di dati in JavaScript

In JavaScript, i tipi di dati definiscono la natura dei valori che possono essere archiviati e manipolati. Conoscere i diversi tipi di dati è fondamentale per scrivere codice JavaScript efficace e organizzato.

## Tipi di dati primitivi:

JavaScript offre sei tipi di dati primitivi:

- Numero (Number): Rappresenta numeri interi o decimali. Esempio: 10, 3.14.
- Stringa (String): Rappresenta sequenze di caratteri testuali. Esempio: "Hello World", "Ciao a tutti".
- Booleano (Boolean): Può assumere solo due valori: true o false. Esempio: true, false.
- Null (Null): Indica l'assenza di un valore. Esempio: null.
- Undefined (Undefined): Indica che una variabile non è stata inizializzata o è stata eliminata. Esempio: undefined.
- Symbol (Symbol): Un nuovo tipo di dato introdotto in ES6 per identificare valori unici. Esempio: Symbol("uniqueID").

## Tipi di dati complessi:

Oltre ai tipi primitivi, JavaScript dispone di due tipi di dati complessi:

- Oggetto (Object): Collezioni di coppie chiave-valore che rappresentano entità o dati strutturati.

```js
 { nome: "Mario", età: 30 }.
```

- Array (Array): Liste ordinate di valori, che possono essere di qualsiasi tipo. Esempio:

```js
 array = ["mela", "banana", "arancia"].
```

## Tipi di dati speciali:

Esistono anche due tipi di dati speciali:

- Funzione (Function): Blocchi di codice riutilizzabili che eseguono un'azione specifica. Esempio: function saluto() { console.log("Ciao!"); }.
- Espressione regolare (RegExp): Modelli di testo utilizzati per cercare e manipolare sequenze di caratteri. Esempio: /^[A-Z][a-z]+$/ per trovare parole che iniziano con una maiuscola e finiscono con una minuscola.

## Conversione dei tipi di dati:

È possibile convertire un valore da un tipo di dato a un altro utilizzando funzioni di conversione dedicate, come parseInt(), parseFloat(), toString(), e Boolean()

Le variabili sono elementi fondamentali in qualsiasi linguaggio di programmazione, e JavaScript non fa eccezione. Permettono di archiviare dati e informazioni che possono essere utilizzate e manipolate nel corso di un programma.

## Dichiarazione e assegnazione:

Per creare una variabile in JavaScript, si utilizza la parola chiave var, seguita dal nome della variabile e da un segno di uguale (=) e dal valore da archiviare:

```js
var nome = "Mario";
var eta = 30;
var somma = 10 + 5;
```

## Portata (Scope):

La portata di una variabile definisce la sua visibilità all'interno del programma. Esistono due tipi di portata:

Portata globale (Global Scope): Le variabili dichiarate con var all'esterno di qualsiasi blocco di codice sono accessibili da qualsiasi punto del programma.
Portata di blocco (Block Scope): Le variabili dichiarate all'interno di blocchi di codice (come if, for, while) sono accessibili solo all'interno di quel blocco.

Gli operatori in JavaScript: Guida completa
Gli operatori sono elementi fondamentali in qualsiasi linguaggio di programmazione, e JavaScript non fa eccezione. Permettono di eseguire operazioni su dati, combinare valori, confrontare elementi e controllare il flusso del programma. In JavaScript, esistono diverse categorie di operatori:

## Operatori aritmetici:

Effettuano operazioni matematiche su numeri:

- Addizione (+)
- Sottrazione (-)
- Moltiplicazione (\*)
- Divisione (/)
- Resto della divisione (%)
- Potenza (\*\*)

```js
var somma = 10 + 5; // somma = 15
var differenza = 10 - 5; // differenza = 5
var prodotto = 10 * 5; // prodotto = 50
var divisione = 10 / 5; // divisione = 2
var resto = 10 % 3; // resto = 1
var potenza = 2 ** 3; // potenza = 8
```

## Operatori di confronto:

Confrontano valori e restituiscono un valore booleano (true o false):

- Uguaglianza (==)
- Disuguaglianza (!=)
- Uguaglianza stretta (===)
- Disuguaglianza stretta (!==)
- Minore (<)
- Minore o uguale (<=)
- Maggiore (>)
- Maggiore o uguale (>=)

```js
var x = 10;
var y = 15;

var uguale = x == y; // uguale = false
var disuguale = x != y; // disuguale = true
var uguaglianzaStretta = x === y; // uguaglianzaStretta = false
var disuguaglianzaStretta = x !== y; // disuguaglianzaStretta = true
var minore = x < y; // minore = true
var minoreUguale = x <= y; // minoreUguale = true
var maggiore = x > y; // maggiore = false
var maggioreUguale = x >= y; // maggioreUguale = false
```

## Operatori logici:

Combinano espressioni booleane e restituiscono un valore booleano:

- And (&&)
- Or (||)
- Not (!)

```js
var x = 10;
var y = 15;
var z = 20;

var and = x < y && y < z; // and = true
var or = x > y || y > z; // or = false
var not = !(x == y); // not = true
```

## Operatori di assegnazione:

Assegnano valori a variabili:

- Assegnazione semplice (=)
- Assegnazione con operatore aritmetico (+=, -=, \*=, /=, %=)

```js
var x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 3; // x = 0
```

## Operatori ternari:

Un operatore condizionale che restituisce un valore in base a una condizione:

```js
var eta = 18;
var maggiorenne = eta >= 18 ? "Maggiorenne" : "Minorenne";
console.log(maggiorenne); // Output: Maggiore
```

## Operatori bit a bit:

Gli operatori bit a bit in JavaScript eseguono operazioni sui singoli bit di un valore numerico. Questi operatori sono particolarmente utili per la manipolazione di flag, l'estrazione di bit specifici e l'esecuzione di operazioni logiche a livello di bit.

- AND (&): Esegue l'AND bit a bit su due valori, restituendo 1 solo se entrambi i bit corrispondenti sono
- OR (|): Esegue l'OR bit a bit su due valori, restituendo 1 se almeno un bit corrispondente è 1.
- XOR (^): Esegue l'XOR bit a bit su due valori, restituendo 1 se i bit corrispondenti sono diversi.
- NOT (~) peratore NOT bit a bit

```js
var x = 10; // 00001010 in binario
var y = 5; // 00000101 in binario

var and = x & y; // 00000000 in binario (risultato: 0)
var or = x | y; // 00001111 in binario (risultato: 15)
var xor = x ^ y; // 00001111 in binario (risultato: 15)
var x = 10; // 00001010 in binario
var not = ~x; // 11110101 in binario (risultato: NOT di ogni bit)
```

## Operatori di spostamento:

Spostamento a sinistra (<<): Sposta i bit di un valore verso sinistra, aggiungendo zeri a destra.
Spostamento a destra (>>): Sposta i bit di un valore verso destra, eliminando i bit più a sinistra (con segno aritmetico) o aggiungendo zeri a sinistra (senza segno).
Spostamento a destra senza segno (>>>): Sposta i bit di un valore verso destra, aggiungendo zeri a sinistra.

```js
var x = 10; // 00001010 in binario

var sx1 = x << 2; // 10100000 in binario (spostamento di 2 bit a sinistra: 10 * 2^2)
var dx1 = x >> 2; // 00000101 in binario (spostamento di 2 bit a destra: 10 / 2^2)
var dx2 = x >>> 2; // 00000101 in binario (spostamento di 2 bit a destra senza segno)
```

## Strutture di controllo:

Le strutture di controllo sono elementi fondamentali in qualsiasi linguaggio di programmazione, e JavaScript non fa eccezione.expand_more Permettono di controllare il flusso del programma, eseguendo codice in base a determinate condizioni o iterando su sequenze di dati.expand_more In JavaScript, esistono diverse strutture di controllo:

## Istruzioni condizionali:

Permettono di eseguire codice in base al verificarsi o meno di una condizione:

- Istruzione if: Esegue un blocco di codice se una condizione è vera.expand_more
- Istruzione else: Esegue un blocco di codice alternativo se la condizione dell'istruzione if è falsa.
- Istruzione else if: Esegue un blocco di codice alternativo se una condizione specifica è vera, dopo aver verificato altre condizioni con istruzioni if.
- Istruzione switch: Esegue un blocco di codice in base al valore di un'espressione, utilizzando casi e valori corrispondenti.

```js
var eta = 18;

if (eta >= 18) {
  console.log("Maggiorenne");
} else {
  console.log("Minorenne");
}

var giorno = "lunedì";

switch (giorno) {
  case "lunedì":
    console.log("Inizio della settimana!");
    break;
  case "venerdì":
    console.log("Fine della settimana!");
    break;
  default:
    console.log("Giorno generico");
}
```

## Cicli:

Permettono di ripetere un blocco di codice un numero definito di volte o fino a quando una condizione è vera:

Ciclo for: Esegue un blocco di codice un numero definito di volte, utilizzando un contatore e un range di valori.expand_more
Ciclo while: Esegue un blocco di codice finché una condizione è vera, valutando la condizione all'inizio di ogni iterazione.expand_more
Ciclo do...while: Esegue un blocco di codice almeno una volta, valutando la condizione alla fine di ogni iterazione.expand_more
Ciclo for...of: Esegue un blocco di codice su ogni elemento di un oggetto iterabile (array, stringa, mappa).expand_more
Ciclo for...in: Esegue un blocco di codice su ogni proprietà enumerabile di un oggetto.

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}

var x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

do {
  console.log("Esegui almeno una volta");
} while (false);

var numeri = [1, 5, 10, 15];
for (var numero of numeri) {
  console.log(numero);
}

var persona = { nome: "Mario", età: 30 };
for (var proprietà in persona) {
  console.log(proprietà + ": " + persona[proprietà]);
}
```

## funzioni

Le funzioni sono blocchi di codice riutilizzabili in JavaScript che eseguono un'operazione specifica. Permettono di modularizzare il codice, renderlo più leggibile, organizzato e facile da mantenere. Le funzioni sono elementi fondamentali per la programmazione in JavaScript e per la creazione di applicazioni web complesse.

## Dichiarazione e struttura:

Le funzioni vengono dichiarate utilizzando la parola chiave function, seguita dal nome della funzione, dalle parentesi di apertura e chiusura (()) e dalle graffe {} che racchiudono il corpo della funzione. All'interno delle parentesi, è possibile definire parametri per la funzione.

```js
function saluto() {
  console.log("Ciao a tutti!");
}

saluto(); // chiamata alla funzione saluto
```

## Funzioni con parametri:

Le funzioni possono ricevere valori in input, chiamati parametri, che vengono utilizzati all'interno del corpo della funzione. I parametri vengono definiti all'interno delle parentesi della dichiarazione della funzione, separati da virgole.

```js
function salutaPersona(nome) {
  console.log("Ciao, " + nome + "!");
}

salutaPersona("Mario"); // chiamata alla funzione salutaPersona con parametro
```

## Funzioni come argomenti:

In JavaScript, le funzioni possono essere passate come argomenti ad altre funzioni. Questo permette di creare funzioni più flessibili e riutilizzabili.

```js
function eseguiFunzione(funzione) {
  funzione();
}

function saluto() {
  console.log("Ciao!");
}

eseguiFunzione(saluto); // Output: Ciao!
```

## Funzioni anonime:

Le funzioni anonime sono funzioni senza nome che vengono espresse utilizzando l'espressione function seguita dalle parentesi e dal corpo della funzione. Le funzioni anonime possono essere assegnate a variabili o utilizzate come argomenti di altre funzioni.

```js
var funzioneAnonima = function () {
  console.log("Funzione anonima!");
};

funzioneAnonima(); // Output: Funzione anonima!
```

## Ricorsione:

Una funzione ricorsiva è una funzione che chiama se stessa. La ricorsione può essere utilizzata per implementare algoritmi complessi che si dividono in sottoproblemi simili.
