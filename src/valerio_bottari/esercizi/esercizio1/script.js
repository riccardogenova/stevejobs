/** @format */

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
