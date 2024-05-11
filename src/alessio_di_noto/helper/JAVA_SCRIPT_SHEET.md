<!-- @format -->

### Sintassi Base

```javascript
// Questo è un commento su una singola riga

/*
  Questo è un commento su
  più righe
*/

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
  nome: 'Mario',
  cognome: 'Rossi',
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

# Variabili:

- `var`: Con `var`, è possibile dichiarare una variabile con uno scope di funzione. Ciò significa che la variabile sarà visibile all'interno della funzione in cui è stata dichiarata, e sarà accessibile anche al di fuori di blocchi di codice specifici come `if` o `for`.
- `let`: `let` è simile a `var`, ma ha uno scope di blocco. Ciò significa che la variabile sarà visibile solo all'interno del blocco in cui è stata dichiarata, come un blocco `if` o un ciclo `for`. Questo aiuta a prevenire problemi di "pollution" nell'ambito (scope pollution), in cui le variabili possono essere accessibili accidentalmente al di fuori del loro blocco.
- `const`: `const` viene utilizzato per dichiarare costanti il cui valore non può essere modificato dopo l'assegnazione. Questo significa che una volta che è stato assegnato un valore a una costante, non è possibile riassegnare un nuovo valore ad essa.

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

      ```javascript

      Dichiarazione di variabili

      var x = 5; // Variabile globale
      let y = 10; // Variabile locale (introdotta in ECMAScript 6)
      const z = 15; // Costante (non può essere riassegnata)

      Tipi di variabili
      I principali tipi di variabili sono:
      // - Number: numeri interi o decimali
      // - String: sequenze di caratteri
      // - Boolean: valore vero o falso
      // - Object: strutture dati complesse
      // - Array: collezioni di elementi
      // - Null: valore nullo
      // - Undefined: valore non definito
      // - Function: oggetti che consentono di eseguire un blocco di codice

      ```

# Tipi di Dati

- I tipi di dati in JavaScript includono numeri (interi e decimali), stringhe di testo, valori booleani (true o false), array (collezioni ordinate di elementi), oggetti (strutture dati complesse), funzioni, null e undefined.

# Operatori

- Gli operatori in JavaScript consentono di eseguire operazioni su variabili e valori. Gli operatori includono quelli aritmetici (+, -, _, /, %), di assegnazione (=, +=, -=, _=, /=), di comparazione (==, ===, !=, !==, >, <, >=, <=), logici (&&, ||, !), di incremento/decremento (++, --) e ternari (condizione ? valore1 : valore2).
  Ecco la lista degli operatori logici, matematici e di confronto in JavaScript convertiti in formato Markdown:

  ### Operatori Logici:

  1.  **&& (AND)**:
      - Restituisce `true` se entrambe le espressioni sono vere, altrimenti restituisce `false`.
  2.  **|| (OR)**:
      - Restituisce `true` se almeno una delle espressioni è vera, altrimenti restituisce `false`.
  3.  **! (NOT)**:
      - Inverte il valore di verità di un'espressione. Se l'espressione è vera, restituisce `false`; se è falsa, restituisce `true`.

  ### Operatori Matematici:

  1.  **+ (Addizione)**:
      - Aggiunge due operandi o converte un operando in una stringa e concatena le stringhe.
  2.  **- (Sottrazione)**:
      - Sottrae il secondo operando dal primo operando.
  3.  **\* (Moltiplicazione)**:
      - Moltiplica due operandi.
  4.  **/ (Divisione)**:
      - Divide il primo operando per il secondo operando.
  5.  **% (Modulo)**:
      - Restituisce il resto della divisione tra il primo operando e il secondo operando.

  ### Operatori di Confronto:

  1.  **== (Uguaglianza)**:
      - Restituisce `true` se i due operandi sono uguali in valore.
  2.  **=== (Uguaglianza Stretta)**:
      - Restituisce `true` se i due operandi sono uguali in valore e tipo.
  3.  **!= (Diverso)**:
      - Restituisce `true` se i due operandi non sono uguali in valore.
  4.  **!== (Diverso Stretto)**:
      - Restituisce `true` se i due operandi non sono uguali in valore o tipo.
  5.  **> (Maggiore di)**:
      - Restituisce `true` se il primo operando è maggiore del secondo operando.
  6.  **< (Minore di)**:
      - Restituisce `true` se il primo operando è minore del secondo operando.
  7.  **>= (Maggiore o Uguale a)**:
      - Restituisce `true` se il primo operando è maggiore o uguale al secondo operando.
  8.  **<= (Minore o Uguale a)**:
      - Restituisce `true` se il primo operando è minore o uguale al secondo operando.

# Controllo del Flusso

- Il controllo del flusso in JavaScript consente di prendere decisioni basate su condizioni o di iterare su blocchi di codice. Le strutture di controllo includono `if`, `else if`, `else` per decisioni condizionali, `switch`, `case`, `break`, `default` per la selezione di uno dei molti blocchi di codice da eseguire, e `for`, `while`, `do...while` per l'iterazione su un blocco di codice.

  ```javascript
  // Condizioni
  if (x > y) {
    console.log('x è maggiore di y');
  } else if (x < y) {
    console.log('y è maggiore di x');
  } else {
    console.log('x e y sono uguali');
  }
  ```

# Funzioni

- Le funzioni in JavaScript sono blocchi di codice riutilizzabili che eseguono un'azione specifica. Possono accettare input sotto forma di parametri e restituire un output sotto forma di valore di ritorno. Le funzioni possono essere definite in diversi modi:

  1.  **Dichiarazione di una funzione**:

  ```javascript
  function somma(a, b) {
    return a + b;
  }
  ```

  2.  **Espressione di funzione**:

  ```javascript
  var somma = function (a, b) {
    return a + b;
  };
  ```

  3.  **Arrow Function** (Introdotta in ECMAScript 6):

  ```javascript
  var somma = (a, b) => a + b;
  ```

  #### Parametri delle Funzioni

  I parametri delle funzioni sono valori che vengono passati a una funzione quando viene chiamata. Le funzioni possono accettare zero o più parametri. Ad esempio:

  ```javascript
  function saluta(nome) {
    console.log('Ciao, ' + nome + '!');
  }

  saluta('Mario'); // Output: Ciao, Mario!
  ```

  #### Valore di Ritorno

  Il valore di ritorno di una funzione è il valore restituito dalla funzione quando viene eseguita. Una funzione può restituire qualsiasi tipo di valore, incluso un numero, una stringa, un array, un oggetto o anche un'altra funzione. Ad esempio:

  ```javascript
  function somma(a, b) {
    return a + b;
  }

  var risultato = somma(3, 5);
  console.log(risultato); // Output: 8
  ```

  ### Funzioni Principali

  #### `parseInt()`

  La funzione `parseInt()` converte una stringa in un numero intero. Restituisce il numero intero corrispondente alla stringa, o `NaN` se la stringa non inizia con un numero.

  Esempio:

  ```javascript
  let numero = parseInt('10'); // numero sarà 10
  ```

  #### `parseFloat()`

  La funzione `parseFloat()` converte una stringa in un numero decimale (a virgola mobile). Restituisce il numero decimale corrispondente alla stringa, o `NaN` se la stringa non inizia con un numero.

  Esempio:

  ```javascript
  let numero = parseFloat('10.5'); // numero sarà 10.5
  ```

  #### `isNaN()`

  La funzione `isNaN()` determina se un valore è NaN (Non-a-Number). Restituisce `true` se il valore passato non è un numero, altrimenti restituisce `false`.

  Esempio:

  ```javascript
  isNaN(10); // false
  isNaN('ciao'); // true
  ```

  ## **High-order function**

  Le high order function (funzioni di ordine superiore) sono funzioni che soddisfano almeno uno dei seguenti criteri:

  1. Prendono una o più funzioni come argomenti.
  2. Restituiscono una funzione come risultato.

  In altre parole, le high-order function trattano le funzioni come valori, consentendo di manipolarle e utilizzarle in modi diversi all'interno di un programma.

  Ad esempio, è possibile definire una funzione che accetta un'altra funzione come argomento, la modifica e la restituisce. Ecco un esempio di una high-order function in JavaScript che accetta una funzione `func` come argomento e restituisce una nuova funzione che chiama `func` due volte:

  ```javascript
  function highOrderFunction(func) {
    return function (x) {
      return func(func(x));
    };
  }
  ```

  Le high-order function possono rendere il codice più flessibile, modulare e facile da leggere e scrivere, poiché consentono di astrarre i concetti comuni in funzioni riutilizzabili.

# Array

- In JavaScript, un array è una struttura dati che memorizza una collezione di elementi. Gli array possono contenere elementi di qualsiasi tipo di dati, inclusi numeri, stringhe, oggetti e persino altri array. Gli array in JavaScript possono essere modificati dinamicamente.Ecco un esempio di base su come puoi creare e utilizzare gli array in JavaScript:

  ```javascript
  // Creazione di un array
  let frutta = ['Mela', 'Banana', 'Arancia'];

  // Accesso agli elementi di un array
  console.log(frutta[0]); // Output: Mela
  console.log(frutta[1]); // Output: Banana

  // Modifica degli elementi di un array
  frutta[2] = 'Uva';
  console.log(frutta); // Output: ["Mela", "Banana", "Uva"]

  // Aggiunta di elementi alla fine di un array
  frutta.push('Ananas');
  console.log(frutta); // Output: ["Mela", "Banana", "Uva", "Ananas"]

  // Rimozione dell'ultimo elemento da un array
  let ultimaFrutta = frutta.pop();
  console.log(ultimaFrutta); // Output: Ananas
  console.log(frutta); // Output: ["Mela", "Banana", "Uva"]

  // Iterazione attraverso un array
  for (let i = 0; i < frutta.length; i++) {
    console.log(frutta[i]);
  }
  ```

  Gli array in JavaScript hanno alcuni metodi che modificano direttamente l'array originale (mutabili) e altri che restituiscono un nuovo array senza modificare quello originale (non mutabili).

  ### Metodi Mutabili degli Array:

  1. **push()**:

  - Aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza dell'array.

  2. **pop()**:

  - Rimuove l'ultimo elemento dall'array e lo restituisce.

  3. **shift()**:

  - Rimuove il primo elemento dall'array e lo restituisce, riducendo la lunghezza dell'array di uno.

  4. **unshift()**:

  - Aggiunge uno o più elementi all'inizio dell'array e restituisce la nuova lunghezza dell'array.

  5. **splice()**:

  - Aggiunge o rimuove elementi dall'array in base a determinati criteri.

  6. **sort()**:

  - Ordina gli elementi dell'array direttamente in loco e restituisce l'array ordinato.

  ### Metodi Non Mutabili degli Array:

  1. **concat()**:

  - Concatena uno o più array e restituisce un nuovo array senza modificare gli array originali.

  2. **slice()**:

  - Estrae una porzione di un array e restituisce un nuovo array senza modificare l'array originale.

  3. **filter()**:

  - Filtra gli elementi dell'array in base a una determinata condizione e restituisce un nuovo array con gli elementi che soddisfano la condizione, senza modificare l'array originale.

    Questo esempio crea un nuovo array con gli elementi che hanno un valore maggiore di 18:

    ```javascript
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) {
      return value > 18;
    }
    ```

    Nota che la funzione richiede 3 argomenti:

    - Il valore dell'elemento
    - L'indice dell'elemento
    - L'array stesso

    Nell'esempio sopra, la funzione di callback non utilizza gli argomenti indice e array, quindi possono essere omessi:

    ```javascript
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value) {
      value > 18;
      return true; //booleano
    }
    ```

    La funzione mi ritorna un **Booleano**

  4. **map()**:

     Applica ed esegue una funziona su ogni elemento dell'array considerato e restituisce un nuovo array con i risultati, senza modificare l'array originale.

     - Il metodo map() non esegue la funzione su arrai con elementi senza valore.
     - Il metodo map() non modifica l'array di partenza/originale.

     In questo esempio ogni elemento dell'array è moltiplicato per 2:

     Esempio

     ```javascript
     const numbers1 = [45, 4, 9, 16, 25];
     const numbers2 = numbers1.map(myFunction);

     function myFunction(value, index, array) {
       return value * 2;
     }
     ```

     Da notare che la funzione ha tre argomento:

     - Il valore dell'elemento
     - L'indice dell'elemento
     - L'array stesso

     Quando una "callback function" (la funzione argomento del map) usa per esempio solo il "value" parametro, i paramentri index e array possono essere omessi:

     Esempio:

     ```javascript
     const numbers1 = [45, 4, 9, 16, 25];
     const numbers2 = numbers1.map(myFunction);

     function myFunction(value) {
       return value * 2;
     }
     ```

  5. **forEach()**:

     Viene utilizzato per eseguire una determinata funzione su ciascun elemento di un array. Questo metodo itera su ogni elemento dell'array e applica la funzione fornita a ciascun elemento.

     Ecco un esempio di come utilizzare il metodo forEach():

     ```javascript
     const array = [1, 2, 3, 4, 5];

     // Definiamo una funzione di callback che verrà eseguita su ciascun elemento dell'array
     function stampaElemento(elemento) {
       console.log(elemento);
     }

     // Utilizziamo il metodo forEach per iterare su ogni elemento dell'array e chiamare la funzione di callback su ciascuno di essi
     array.forEach(stampaElemento);

     // Output:
     // 1
     // 2
     // 3
     // 4
     // 5
     ```

     In questo esempio, abbiamo definito una funzione di callback stampaElemento che semplicemente stampa ogni elemento. Poi, abbiamo utilizzato il metodo forEach() sull'array array e passato stampaElemento come argomento. La funzione stampaElemento viene eseguita su ciascun elemento dell'array, stampando ogni elemento nell'output.

     È importante notare che la funzione di callback passata a forEach() accetta tre parametri: l'elemento corrente, l'indice corrente e l'array su cui forEach() è stato chiamato. Tuttavia, spesso la funzione di callback viene definita con un solo parametro (l'elemento corrente), poiché di solito è l'unico valore di interesse.

     Questo metodo non è mutabile, tuttavia, la funzione di callback passata a forEach() potrebbe essere mutabile, nel senso che potrebbe modificare gli elementi dell'array o le variabili esterne all'interno della funzione. Questo può influenzare lo stato degli elementi dell'array o delle variabili esterne, ma il metodo forEach() in sé non è responsabile di queste modifiche.

     Ad esempio, considera questo caso:

     ```javascript
     const array = [1, 2, 3, 4, 5];

     function raddoppiaElemento(elemento, indice, array) {
       array[indice] = elemento * 2;
     }

     array.forEach(raddoppiaElemento);

     console.log(array); // Output: [2, 4, 6, 8, 10]
     ```

  6. **Array reduce()**

     - Il metodo reduce() di JavaScript esegue una funzione su ogni elemento dell'array per produrre (ridurlo a) un singolo valore.
     - Il metodo reduce() funziona da sinistra a destra nell'array. Vedi anche reduceRight().
     - Il metodo reduce() non riduce l'array originale.

     Questo esempio trova la somma di tutti i numeri in un array:

     ```javascript
     const numbers = [45, 4, 9, 16, 25];
     let sum = numbers.reduce(myFunction);

     function myFunction(total, value, index, array) {
       return total + value;
     }
     ```

     Nota che la funzione richiede 4 argomenti:

     - Il totale (il valore iniziale / valore restituito precedentemente)
     - Il valore dell'elemento
     - L'indice dell'elemento
     - L'array stesso

     Il metodo reduce() può accettare un valore iniziale come un numero, un vettore o una stringa

     - const esempio = arrayIniziale.reduce(myFunction, 0); //Numero iniziale 0, utile per inizializzare un accumulatore
     - const esempio = arrayIniziale.reduce(myFunction, []); //Array vuoto, da usare per esempio con lo spread (...) per caricare un nuovo vettore

  ## Comandi ricerca negli array

  1.  **Array.includes()** :
      Questo comando ci permette di controllare se yb elemento è presente o meno nell'array (Inclusi gli element NaN, unlike indexOf).

      ```javascript
      const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

      fruits.includes('Mango'); // is true
      ```

      Sintassi

                      array.includes(search-item)

  2.  **Array.indexOf()** :
      Questo metodo ricerca un array per il valore di un elemento e ne restituisce la posizione

      _Nota: Il primo elemento ha posizione 0, il secondo posizione 1 e così via._

      ```javascript
      Ricerca un elemento per la parola "Apple":
      const frutta = ["Apple", "Orange", "Apple", "Mango"];
      let posizione = frutta.indexOf("Apple") + 1;
      ```

      Sintassi

                    array.indexOf(item, start)

      con start indico da quale elemento inziare la ricerca

  3.  **Array find()**

      Il metodo find() ritorna il valore del primo elemento che soddisfa la condizione indicata nella funzione.

      In questo esempio il find ritorna il primo elemento maggiore di 18:

      Esempio

      ```javascript
      const numbers = [4, 9, 16, 25, 29];
      let first = numbers.find(myFunction);

      function myFunction(value, index, array) {
        value > 18;
        return true; //booleano
      }
      ```

      Nota che la funzione prende tre parametri

      - Il valore dell'elemento
      - L'indice dell'elemento
      - L'array stesso

      La funzione mi ritorna un **Booleano**

  4.**JavaScript Array findIndex()**

      Il metodo findIndex() ritorna l'indice del primo elemento dell'array che soddisfa la condizione indicata nella funzione.

      In questo esempio trova l'indice del primo elemento che è maggiore di 18:

      Esempio

      ```javascript

        const numbers = [4, 9, 16, 25, 29];
        let first = numbers.findIndex(myFunction);

        function myFunction(value, index, array) {
          value > 18;
          return true; //booleano
      }
      ```

      Nota che la funzione prende tre parametri

            - Il valore dell'elemento
            - L'indice dell'elemento
            - L'array stesso

      La funzione mi ritorna un **Booleano**

# Stringhe

- Le stringhe rappresentano sequenze di caratteri. JavaScript fornisce numerosi metodi per manipolare le stringhe, come il calcolo della lunghezza, la concatenazione, la ricerca di sottostringhe, l'estrazione di una parte della stringa, la conversione in maiuscolo o minuscolo, ecc.

# Oggetti

- Gli oggetti in JavaScript sono strutture dati che contengono coppie chiave-valore. Possono essere utilizzati per rappresentare entità complesse e organizzare dati correlati. Gli oggetti sono definiti utilizzando la notazione letterale di oggetto o la funzione costruttore `Object()`.

  #### Creazione di Oggetti

  1.  **Notazione Letterale di Oggetto**:

  ```javascript
  var persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30,
  };
  ```

  2.  **Funzione Costruttore `Object()`**:

  ```javascript
  var persona = new Object();
  persona.nome = 'Mario';
  persona.cognome = 'Rossi';
  persona.eta = 30;
  ```

  #### Accesso alle Proprietà degli Oggetti

  Le proprietà degli oggetti possono essere accedute e manipolate utilizzando la notazione a punto (`object.property`) o la notazione a parentesi (`object['property']`).

  ```javascript
  console.log(persona.nome); // Output: Mario
  console.log(persona['cognome']); // Output: Rossi
  ```

  #### Aggiunta/Modifica/Eliminazione di Proprietà

  Le proprietà degli oggetti possono essere aggiunte, modificate o rimosse in qualsiasi momento.

  ```javascript
  // Aggiunta di una nuova proprietà
  persona.sesso = 'Maschio';

  // Modifica di una proprietà esistente
  persona.eta = 31;

  // Rimozione di una proprietà
  delete persona.eta;
  ```

# Eccezioni

- Le eccezioni in JavaScript sono errori che si verificano durante l'esecuzione del programma. JavaScript fornisce un'infrastruttura di gestione delle eccezioni con i blocchi `try`, `catch` e `finally`, che consentono di gestire e recuperare da errori imprevisti durante l'esecuzione del codice.

# Moduli

- I moduli in JavaScript permettono di organizzare il codice in unità logiche e riutilizzabili. Consentono la separazione del codice in file diversi e l'importazione/esportazione di funzioni, variabili o oggetti tra di essi.

# Eventi

- Gli eventi in JavaScript rappresentano le azioni degli utenti o altre attività che si verificano nell'applicazione web, come il clic su un pulsante, il caricamento della pagina, ecc. Gli eventi possono essere gestiti aggiungendo dei "listener" agli elementi del DOM tramite il metodo `addEventListener()`.

# Promises

- Le Promises sono oggetti utilizzati per rappresentare il completamento (o il fallimento) di un'operazione asincrona. Consentono di gestire operazioni asincrone in modo più chiaro e conciso rispetto alle callback.

# Async/Await

- L'Async/Await è una caratteristica introdotta in ECMAScript 2017 per semplificare la scrittura e la gestione del codice asincrono. Le funzioni `async` dichiarano che restituiranno una Promise, mentre `await` viene utilizzato all'interno di funzioni `async` per attendere il completamento di una Promise prima di procedere con l'esecuzione del codice successivo.

# Tipizzazione in JavaScript

- JavaScript è un linguaggio di programmazione debolmente tipizzato, il che significa che le variabili non sono vincolate a un tipo di dati specifico. La tipizzazione in JavaScript è dinamica, il che significa che il tipo di una variabile può cambiare durante l'esecuzione del programma.

# Null e Undefined

- `null`: rappresenta un valore nullo o vuoto. Viene utilizzato per indicare l'assenza intenzionale di un valore.
- `undefined`: rappresenta il valore non assegnato o non definito. Quando una variabile è dichiarata ma non inizializzata, il suo valore predefinito è `undefined`.
