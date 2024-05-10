/**
 * var numbers = [1, 2, 3, 4, 5, 6];
 *
 * const people = [
 *     { name: 'Alice', age: 25 },
 *     { name: 'Bob', age: 17 },
 *     { name: 'Charlie', age: 20 },
 *     { name: 'David', age: 30 }
 *     ];
 *
 * @format
 */

/*exercise 1

function triplica(num){
    return num * 3;
}

console.log(numbers.map(triplica))*/

/*exercise 2

function filter_1(num){
    if (num > 3 && num % 2 == 1) return true;
    else return false;
}

console.log(
    numbers.filter(filter_1)
)
*/

/*exercise 3

console.log(
    people.find(
        function n(el){
            return el.age < 18
        }
    )
)
*/

/*
exercise 4

console.log(numbers.reduce(
        function sum(num, acc){
            acc = acc + num
            return acc
        }, 0)
)
*/

/*
exercise 5

console.log(people.findIndex(
        function filter_2(el){
            return (el.age >= 18 && el.age <= 24)
        }
    )
)
*/

/*
exercise 6

function filter_3(el){
    return el.age > 20 //boolean
}

function makeNameArray(el){
    return el.name
}

console.log(people.filter(filter_3).map(makeNameArray))
*/

/*
exercise 7

const purchases = [
    { customer: 'Alice', price: 20 },
    { customer: 'Bob', price: 30 },
    { customer: 'Alice', price: 15 },
    { customer: 'Charlie', price: 25 }
    ];

function filter_alice(el){
    if (el.customer === "Alice") return true
    else return false
}

function get_price(el){
    return el.price
}

console.log(
    purchases.filter(filter_alice).map(get_price).reduce(
        function sum(num, acc){
            acc = acc + num
            return acc
        }
    )
)
*/

/*
exercise 8

const people_names = ["Alice", "Bob", "Charlie", "Alice"]

function filter_4(string){
    if (string.at(0) === "b" || string.at(0) === "B") return true
    else return false
}

console.log(people_names.filter(filter_4))
*/

/*
exercise 9

const words = ["mela", "banana", "gatto", "cane", "elefante"]

function filter_5(str){
    if (str.at(0) === "e" || str.at(0) === "E") return true
    else return false
}

function convert(el){
    let num = el.length
    return num
}

function sum(num, acc){
    return acc + num
}

console.log(words.filter(filter_5).map(convert).reduce(sum, 0))
*/

/*
exercise 10

const test = [1, 4, 9, 16, 25];

function pow(num){
    return num * num
}

function sum(num, acc){
    return acc + num
}

console.log(test.map(pow).reduce(sum, 0))
*/
