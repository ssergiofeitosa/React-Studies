var inc = document.getElementById("incremento");
var dec = document.getElementById("decremento");
var reset = document.getElementById("reset");
var displayNum = document.getElementById("display");
var contador = 0;
function atualizar() {
    displayNum.textContent = contador.toString();
}
function incrementar() {
    contador++;
    atualizar();
}
function decrementar() {
    contador--;
    atualizar();
}
function resetar() {
    contador = 0;
    atualizar();
}
inc.addEventListener("click", incrementar);
dec.addEventListener("click", decrementar);
reset.addEventListener("click", resetar);
