var decrementButton = document.getElementById("decrementa");
var incrementButton = document.getElementById("incrementa");

decrementButton.addEventListener("click", function () {
  decrementa();
});

incrementButton.addEventListener("click", function () {
  incrementa();
});

function decrementa() {
  var numeroElement = document.getElementById("numero");
  var counterValue = parseInt(numeroElement.textContent);
  counterValue--;
  numeroElement.textContent = counterValue;
}

function incrementa() {
  var numeroElement = document.getElementById("numero");
  var counterValue = parseInt(numeroElement.textContent);
  counterValue++;
  numeroElement.textContent = counterValue;
}
