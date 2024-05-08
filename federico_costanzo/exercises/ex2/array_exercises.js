function doubleNumber(number){
    if (number % 2 == 1) {
        number = number * 2
    }
    return number
}

var array = [3, 6, 0.5, -4]
var array2 = []

array2 = array.map(doubleNumber) //creates arrays with results
console.log(array2)