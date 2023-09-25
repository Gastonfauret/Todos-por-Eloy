
function copiar(clase, contenido) {
    const textoCopiado = document.querySelector(clase);

    navigator.clipboard.writeText(textoCopiado.innerText);
    alert(`${contenido} copiado.`);
}

