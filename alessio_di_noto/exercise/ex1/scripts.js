/** @format */

var bottoneSomma = document.getElementById('somma');
var bottoneSottrazione = document.getElementById('sottrazione');
var numero = document.getElementById('numero');

bottoneSomma.addEventListener('click', function () {
  numero.textContent = parseInt(numero.textContent) + 1;
});

bottoneSottrazione.addEventListener('click', function () {
  numero.textContent = parseInt(numero.textContent) - 1;
});
