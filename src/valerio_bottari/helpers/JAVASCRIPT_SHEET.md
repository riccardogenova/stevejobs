# Funzioni in JavaScript

## 1. Dichiarazione di Funzione

Per creare una funzione, utilizziamo la parola chiave `function`, seguita dal nome della funzione e una lista di parametri racchiusi tra parentesi. Il corpo della funzione è racchiuso tra parentesi graffe.

```javascript
function showMessage() {
  alert("Hello everyone!");
}
showMessage(); // Chiamata della funzione
```

## 2. Variabili Locali

Una variabile dichiarata all'interno di una funzione è visibile solo all'interno di quella funzione.

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!";
  alert(message);
}
showMessage(); // "Hello, I'm JavaScript!"
```

## 3. Variabili Esterne

Una funzione può accedere a variabili esterne.

```javascript
let userName = "John";
function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage(); // "Hello, John"
```

## 4. Variabili Locali che Oscurano Variabili Esterne

Se una variabile con lo stesso nome viene dichiarata all'interno di una funzione, questa oscurerà quella esterna.

```javascript
let userName = "John";
function showMessage() {
  let userName = "Bob"; // Variabile locale
  let message = "Hello, " + userName; // "Bob"
  alert(message);
}
showMessage();
alert(userName); // "John" (variabile esterna)
```

## 5. Funzioni con Parametri

Le funzioni possono accettare parametri (input) che vengono passati quando la funzione viene chiamata.

```javascript
function greetUser(name) {
  alert("Hello, " + name + "!");
}
greetUser("Alice"); // "Hello, Alice!"
```

## 6. Valore di Ritorno

Le funzioni possono restituire un valore utilizzando la parola chiave `return`.

```javascript
function add(a, b) {
  return a + b;
}
let result = add(3, 5); // 8
```

## 7. Funzioni Anonime (Espressioni di Funzione)

Possiamo definire funzioni senza assegnarle un nome.

```javascript
let multiply = function (x, y) {
  return x * y;
};
let product = multiply(2, 4); // 8
```

## 8. Arrow Function

Le arrow function sono una sintassi più concisa per definire funzioni.

```javascript
let square = (num) => num * num;
let squaredValue = square(3); // 9
```

## 9. Funzioni Ricorsive

Una funzione può richiamare se stessa.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let resultFactorial = factorial(5); // 120
```

## 10. Callback e Promesse

Le funzioni possono essere passate come argomenti ad altre funzioni (callback) o restituire promesse per gestire operazioni asincrone.

Esempio (callback):

```javascript
function processUserData(userData, callback) {
  // Elaborazione dei dati utente
  callback();
}
processUserData({ name: "John" }, function () {
  alert("Dati utente elaborati!");
});
```

Esempio (promessa):

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Recupero dati da una fonte esterna
    if (dataAvailable) {
      resolve(data);
    } else {
      reject("Errore nel recupero dati");
    }
  });
}
fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## 11. Metodi Avanzati su Array

JavaScript fornisce diversi metodi utili per manipolare gli array in modo funzionale. Ecco una spiegazione di alcuni dei metodi più comuni:

### `map`

Il metodo `map` crea un nuovo array con i risultati della chiamata di una funzione su ogni elemento dell'array chiamante.

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

### `find`

Il metodo `find` restituisce il primo elemento di un array che soddisfa la funzione di test fornita. Se nessun elemento soddisfa la condizione, restituisce `undefined`.

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
let user = users.find((user) => user.id === 1);
console.log(user); // { id: 1, name: 'John' }
```

### `filter`

Il metodo `filter` crea un nuovo array con tutti gli elementi che superano il test implementato dalla funzione fornita.

```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

### `idfilter`

Anche se non esiste una funzione nativa `idfilter` in JavaScript, possiamo creare una funzione personalizzata che filtra gli elementi in base a una lista di ID.

```javascript
function idFilter(array, ids) {
  return array.filter((item) => ids.includes(item.id));
}

let items = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];
let filteredItems = idFilter(items, [1, 3]);
console.log(filteredItems); // [{ id: 1, name: 'item1' }, { id: 3, name: 'item3' }]
```

### `reduce`

Il metodo `reduce` esegue una funzione "reducer" su ciascun elemento dell'array, risultando in un singolo output.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 10
```
