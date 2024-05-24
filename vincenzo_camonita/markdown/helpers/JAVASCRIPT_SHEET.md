# Javascript_sheet

## Dichiarazione di variabili:

    let age = 30;
    const name = "John";
    var pi = 3.14;
    
    
## Tipi di dati:

Stringhe: "Hello, World!"
Numeri: 42, 3.14
Booleani: true, false
Array: let arr = [1, 2, 3];
Oggetti: let person = { name: "John", age: 30 };
Null: null
Non definito: undefined

## Operatori:

Aritmetici: +, -, *, /, %
Di confronto: ==, !=, ===, !==, >, <, >=, <=
Logici: && (AND), || (OR), ! (NOT)


## Istruzioni di controllo:

    if (condition) {
        // Blocco di codice se la condizione è vera
    } else {
        // Blocco di codice se la condizione è falsa
    }

    for (let i = 0; i < 5; i++) {
        // Blocco di codice ripetuto
    }

    while (condition) {
        // Blocco di codice ripetuto finché la condizione è vera
    }

    switch (variable) {
        case value1:
            // Blocco di codice se variable è uguale a value1
            break;
        case value2:
            // Blocco di codice se variable è uguale a value2
            break;
        default:
            // Blocco di codice eseguito se nessun case corrisponde a variable
    }


## Funzioni:

    function greet(name) {
        return "Hello, " + name + "!";
    }

    const result = greet("World");
    console.log(result);


## Eventi:

    document.getElementById("myButton").addEventListener("click", function() {
        console.log("Button clicked!");
    });


## Array e metodi array:

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);


## Oggetti e iterazione sugli oggetti:

    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    for (let key in person) {
        console.log(key + ": " + person[key]);
    }