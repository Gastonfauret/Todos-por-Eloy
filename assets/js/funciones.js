
function copiar(clase, contenido) {
    const textoCopiado = document.querySelector(clase);

    navigator.clipboard.writeText(textoCopiado.innerText);    
    swal(`${contenido} copiado correctamente.`, "Gracias por Colaborar", "success");
}

