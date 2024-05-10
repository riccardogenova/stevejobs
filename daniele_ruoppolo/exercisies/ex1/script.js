var bottoneInc = document.getElementById("bottoneIncrementa");
var bottoneDec = document.getElementById("bottoneDecrementa");
var numero = document.getElementById("numero");
var cambio = 0;

bottoneInc.addEventListener("click", function () {
  cambio++;
  numero.textContent = cambio;
});

bottoneDec.addEventListener("click", function () {
  cambio--;
  numero.textContent = cambio;
});
