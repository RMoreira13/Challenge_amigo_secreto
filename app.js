//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos_participantes = [];


/* FUNÇÃO CAPTURAR NOME DO AMIGO */

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let NomeAmigo = inputNome.value.trim(); // Remove espaços extras
    
    if (NomeAmigo != amigos_participantes) {
        amigos_participantes.push(NomeAmigo); // Adiciona ao array
        inputNome.value = ""; // Limpa o inputNome
    } else {
        alert("Este nome já está na lista, por favor digite outro nome!");
    }
}