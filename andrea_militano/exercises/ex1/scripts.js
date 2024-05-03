document.getElementById("remove").addEventListener("click", remove);
document.getElementById("add").addEventListener("click", add);

function remove() {
  document.getElementById("number").textContent =
    parseInt(document.getElementById("number").textContent) - 1;
}
function add() {
  document.getElementById("number").textContent =
    parseInt(document.getElementById("number").textContent) + 1;
}
