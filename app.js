let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let amigoSorteado;
lista.innerHTML = "";

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function limpiar() {
    document.getElementById("amigo").value = "";
    resultado.innerHTML = "";
}

function agregarAmigo() {
    let texto = document.getElementById("amigo");
    if (texto.value.trim() == "") {
        alert("Por favor, inserte un nombre");
    }
    else {
        amigos.push(texto.value);
        limpiar();
        actualizarLista(amigos);
        console.log(amigos);
    }
}

function actualizarLista(amigos) {
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<br>${amigos[i]}`;
    }   
}

function sortearAmigo() {
    if (amigos.length<=1) {
    alert("Añade al menos 2 amigos");
    }
    else {
        amigoSorteado = amigos[parseInt(Math.floor(Math.random()*amigos.length))];
        resultado.innerHTML =`Amigo Sorteado:<br>${amigoSorteado.toUpperCase()}`;
    }
}