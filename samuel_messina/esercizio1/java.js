/** @format */

// Ottieni riferenze ai pulsanti e al contatore
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');
const counterSpan = document.getElementById('counter');

// Inizializza il contatore a 0
let counter = 0;

// Funzione per aggiornare il contatore e visualizzarlo
function updateCounter() {
  counterSpan.textContent = counter;
}

// Gestore di evento per l'incremento del contatore
incrementButton.addEventListener('click', function () {
  counter++;
  updateCounter();
});

// Gestore di evento per il decremento del contatore
decrementButton.addEventListener('click', function () {
  counter--;
  updateCounter();
});

// Gestore di evento per il reset del contatore
resetButton.addEventListener('click', function () {
  counter = 0;
  updateCounter();
});
