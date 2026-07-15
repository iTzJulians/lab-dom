const contador = document.getElementById('contador');
const botonIncrementar = document.getElementById('btnIncrementar');
const botonDecrementar = document.getElementById('btnDecrementar');
function incrementar() {
    let valor = parseInt(contador.textContent);
    let colorOriginal = window.getComputedStyle(contador).color;
    console.log(colorOriginal + "color original");
    valor += 1
    contador.textContent = valor;
    if (valor >= 10) {
        contador.style.color = "red"
    }
    else {
        contador.style.color = colorOriginal;
    }
}
function decrementar() {
    contador.textContent = parseInt(contador.textContent) - 1;
}
botonIncrementar.addEventListener("click", incrementar)
botonDecrementar.addEventListener("click", decrementar)
console.log(contador.textContent);