function hacerClic() {
    var lista=document.querySelectorAll("#capitulo-1 p");
    lista[0].onclick=mostrarAlerta;
}
function mostrarAlerta() {
    alert('Hiciste clic de nuevo! Geniaaaal!!! ¬¬');
}
window.onload=hacerClic;