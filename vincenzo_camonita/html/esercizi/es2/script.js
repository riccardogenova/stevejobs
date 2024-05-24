function invertArray(array) {
    // Creiamo un nuovo array vuoto in cui memorizzare gli elementi invertiti
    var invertedArray = [];
    
    // Iteriamo sull'array originale partendo dall'ultimo elemento fino al primo
    for (var i = array.length - 1; i >= 0; i--) {
        // Aggiungiamo ogni elemento dell'array originale al nuovo array
        // partendo dall'ultimo elemento fino al primo
        invertedArray.push(array[i]);
    }
    
    // Restituiamo il nuovo array con gli elementi invertiti
    return invertedArray;
}

// Esempio di utilizzo
var myArray = [1, 2, 3, 4, 5];
var inverted = invertArray(myArray);
console.log("Array originale:", myArray);
console.log("Array invertito:", inverted);
