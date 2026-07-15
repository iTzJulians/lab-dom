const contador = document.getElementById('contador');
const botonIncrementar = document.getElementById('btnIncrementar');
const botonDecrementar = document.getElementById('btnDecrementar');
let colorContador = window.getComputedStyle(contador).color;
function incrementar() {
    let valor = parseInt(contador.textContent);
    valor += 1
    contador.textContent = valor;
    if (valor >= 10) {
        contador.style.color = "red"
    }

}
function decrementar() {
    let valor = parseInt(contador.textContent);
    if (valor <= 0) {
        return;
    }
    valor -= 1
    contador.textContent = valor;
    if (valor <= 10) {

        contador.style.color = colorContador;
    }

}
botonIncrementar.addEventListener("click", incrementar)
botonDecrementar.addEventListener("click", decrementar)
console.log(contador.textContent);