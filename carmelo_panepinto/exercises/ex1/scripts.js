const contatore = document.querySelector("#contatore");
const bottone_1 = document.querySelector("#bottone_1");
const bottone_2 = document.querySelector("#bottone_2");

/*function updateCounter() {
  contatore.textContent = contatore;
}*/

function onClick_piu() {
  contatore.textContent = parseInt(contatore.textContent) + 1;
  //updateCounter();
}

function onClick_meno() {
  contatore.textContent = parseInt(contatore.textContent) - 1;
  //updateCounter();
}

bottone_2.addEventListener("click", onClick_piu);

bottone_1.addEventListener("click", onClick_meno);
