/** @format */

document.getElementById('incremento').addEventListener('click', incremento);
document.getElementById('decremento').addEventListener('click', decremento);

function incremento() {
  document.getElementById('numero').textContent = parseInt(document.getElementById('numero').textContent) + 1;
}
function decremento() {
  document.getElementById('numero').textContent = parseInt(document.getElementById('numero').textContent) - 1;
}
