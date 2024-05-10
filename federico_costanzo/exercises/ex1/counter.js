/**
 * window.alert("Script started.");
 *
 * @format
 */

var counterValue = document.querySelector('#counter');

var plusButton = document.querySelector('#plus_button');
var minusButton = document.querySelector('#minus_button');

function pressPlus() {
  counterValue.innerHTML = parseInt(counterValue.innerHTML) + 1;

  if (counterValue.innerHTML === '69') {
    window.open('https://youtu.be/NqCx_vVBRps?si=6F8-BH6ruwZbQpog');
  }
}

function pressMinus() {
  counterValue.innerHTML = parseInt(counterValue.innerHTML) - 1;
}

plusButton.addEventListener('click', pressPlus);
minusButton.addEventListener('click', pressMinus);
