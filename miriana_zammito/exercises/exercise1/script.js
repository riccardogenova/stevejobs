document.getElementById("increase").addEventListener("click", functionIncrease);

document.getElementById("decrease").addEventListener("click", functionDecrease);

function functionIncrease() {
  document.getElementById("value").textContent =
    parseInt(document.getElementById("value").textContent) + 1;
}

function functionDecrease() {
  document.getElementById("value").textContent =
    parseInt(document.getElementById("value").textContent) - 1;
}
