/**
 * Esercizi Semplici
 *
 * 1> Dato un array di numeri, triplica ciascun numero presente nell'array.
 *
 * const numbers = [1, 2, 3, 4, 5];
 *
 * function triplica(num){
 *     return num * 3;
 * }
 *
 * console.log(numbers.map(triplica))
 *
 * 2> Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.
 *
 * const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
 *
 * function filter_1(num){
 *     if (num > 3 && num % 2 == 1) return true;
 *     else return false;
 * }
 *
 * console.log(
 *     numbers.filter(filter_1)
 * )
 *
 * 3> Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.
 *
 * const people = [
 * { name: 'Alice', age: 25 },
 * { name: 'Bob', age: 17 },
 * { name: 'Charlie', age: 20 }
 * ];
 *
 * console.log(
 *     people.find(
 *         function n(el){
 *             return el.age < 18
 *         }
 *     )
 * )
 *
 * 4> Dato un array di numeri, calcola la somma di tutti i numeri nell'array.
 *
 * const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
 *
 * console.log(numbers.reduce(
 *         function sum(num, acc){
 *             acc = acc + num
 *             return acc
 *         }, 0)
 * )
 *
 * 5> Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.
 *
 * const people = [
 * { name: 'Alice', age: 25 },
 * { name: 'Bob', age: 17 },
 * { name: 'Charlie', age: 20 }
 * ];
 *
 * console.log(people.findIndex(
 *         function filter_2(el){
 *             return (el.age >= 18 && el.age <= 24)
 *         }
 *     )
 * )
 *
 * Esercizi Complessi
 *
 * Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.
 *
 *
 * const people = [
 * { name: 'Alice', age: 25 },
 * { name: 'Bob', age: 17 },
 * { name: 'Charlie', age: 20 },
 * { name: 'David', age: 30 }
 * ];
 *
 * function filter_3(el){
 *     return el.age > 20 //boolean
 * }
 *
 * function makeNameArray(el){
 *     return el.name
 * }
 *
 * console.log(people.filter(filter_3).map(makeNameArray))
 *
 * Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice
 *
 *
 * const purchases = [
 * { customer: 'Alice', price: 20 },
 * { customer: 'Bob', price: 30 },
 * { customer: 'Alice', price: 15 },
 * { customer: 'Charlie', price: 25 }
 * ];
 *
 * function filter_alice(el){
 *     if (el.customer === "Alice") return true
 *     else return false
 * }
 *
 * function get_price(el){
 *     return el.price
 * }
 *
 * console.log(
 *     purchases.filter(filter_alice).map(get_price).reduce(
 *         function sum(num, acc){
 *             acc = acc + num
 *             return acc
 *         }
 *     )
 * )
 *
 * 8> Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B
 *
 * const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
 *
 * function filter_4(string){
 *     if (string.at(0) === "b" || string.at(0) === "B") return true
 *     else return false
 * }
 *
 * console.log(people.filter(filter_4))
 *
 * Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e
 *
 * const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
 *
 * function filter_5(str){
 *     if (str.at(0) === "e" || str.at(0) === "E") return true
 *     else return false
 * }
 *
 * function convert(el){
 *     let num = el.length
 *     return num
 * }
 *
 * function sum(num, acc){
 *     return acc + num
 * }
 *
 * console.log(words.filter(filter_5).map(convert).reduce(sum, 0))
 *
 * Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.
 *
 * const numbers = [1, 4, 9, 16, 25];
 *
 * const test = [1, 4, 9, 16, 25];
 *
 * function pow(num){
 *     return num * num
 * }
 *
 * function sum(num, acc){
 *     return acc + num
 * }
 *
 * console.log(test.map(pow).reduce(sum, 0))
 *
 * @format
 */
