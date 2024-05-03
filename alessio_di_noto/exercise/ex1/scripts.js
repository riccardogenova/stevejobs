var bottoneSomma = document.getElementById("somma");
var bottoneSottrazione = document.getElementById("sottrazione");
var numero = document.getElementById("numero");
var contatore = 0;

bottoneSomma.addEventListener("click", function () {
  contatore++;
  numero.textContent = contatore;
});

bottoneSottrazione.addEventListener("click", function () {
  contatore--;
  numero.textContent = contatore;
});
