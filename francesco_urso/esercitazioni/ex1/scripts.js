/*
Elemento html button
Primo recupero il bottone, dichiaro la funzione onclick e dopo metto in ascolto sulla funzione di onclick. 
Successivamente incremento element button, cercare all’interno la proprietà che restituisce il contenuto del tag button. textContent proprietà che fa vedere dentro il tag e posso riassegnare un valore con =, da stringa numero parseInt (‘1’) da stringa a numero
parsInt(nodeTitle.tecContent) +1
*/

document.getElementById("minus").addEventListener("click", decrease);

function decrease() {
  document.getElementById("p").textContent =
    parseInt(document.getElementById("p").textContent) - 1;
}

document.getElementById("plus").addEventListener("click", incrementa);

function incrementa() {
  document.getElementById("p").textContent =
    parseInt(document.getElementById("p").textContent) + 1;
}
