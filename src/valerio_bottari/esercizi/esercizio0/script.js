/**
 * Spiegazione
 * Variabili:
 * counterElement: Riferimento all'elemento <p> che mostra il valore del contatore.
 * decreaseButton e increaseButton: Riferimenti ai pulsanti "-" e "+".
 * count: Variabile che tiene traccia del valore corrente del contatore.
 * updateCounter(): Una funzione che aggiorna il testo all'interno del paragrafo counterElement con il valore attuale di count.
 * Event Listeners:
 * decreaseButton.addEventListener('click', ...) e increaseButton.addEventListener('click', ...): Aggiungono eventi di click ai pulsanti di decremento e incremento. Quando i pulsanti vengono cliccati, count viene adeguatamente decrementato o incrementato, e poi updateCounter() viene chiamato per riflettere il nuovo valore sullo schermo.
 * Inizializzazione: Alla fine, updateCounter() viene chiamato una volta per inizializzare il valore del contatore mostrato nel paragrafo counterElement a 0.
 *
 * @format
 */

const counterElement = document.querySelector('#counter');
const decreaseButton = document.querySelector('#decreaseBtn');
const increaseButton = document.querySelector('#increaseBtn');

let count = 0;

function updateCounter() {
  //update counter
  counterElement.textContent = count;
}

decreaseButton.addEventListener('click', function () {
  // -
  count--;
  updateCounter();
});

increaseButton.addEventListener('click', function () {
  // +
  count++;
  updateCounter();
});

updateCounter(); //inizializza counter
