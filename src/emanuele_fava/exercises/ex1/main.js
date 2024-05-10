/** @format */

document.getElementById('icrease').addEventListener('click', functionIncrease); //Selezioni quale elemento
// prendere, inserisci il listener mettendo cosa vuoi ascolti (in questo caso il click), e si inserisce
// la funzione da eseguire
document.getElementById('decrease').addEventListener('click', functionDecrease);

function functionIncrease() {
  //richiami la funzione, dicendo che la funzione deve prendere
  // l'elemento by id "var", cioè l'elemento numero 0, prende il text content, e lo incrementa di 1
  document.getElementById('var').textContent = parseInt(document.getElementById('var').textContent) + 1;
}

function functionDecrease() {
  document.getElementById('var').textContent = parseInt(document.getElementById('var').textContent) - 1;
}
