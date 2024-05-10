document.addEventListener("DOMContentLoaded", function () {
  var contatore = document.querySelector(".numero p");
  var plusButton = document.querySelector(".buttonPiu button");
  var minusButton = document.querySelector(".buttonMeno button");
  var resetButton = document.querySelector(".reset button");
  var flag = 0;

  plusButton.addEventListener("click", function () {
    counter++;
    contatore.textContent = flag;
  });

  minusButton.addEventListener("click", function () {
    if (flag > 0) {
      flag--;

      contatore.textContent = flag;
    }
  });

  resetButton.addEventListener("click", function () {
    flag = 0;
    contatore.textContent = flag;
  });
});
