/** @format */

var diminuisciNumero = document.getElementById('diminuisci');
var aumentaNumero = document.getElementById('aumenta');

diminuisciNumero.addEventListener('click', function () {
  diminuisci();
});

aumentaNumero.addEventListener('click', function () {
  aumenta();
});

function adiminuisci() {
  var numero = document.getElementById('numero');
  var counter = parseInt(numero.textContent);
  counter--;
  numero.textContent = counter;
}

function aumenta() {
  var numero = document.getElementById('numero');
  var counter = parseInt(numero.textContent);
  counter++;
  numero.textContent = counter;
}
