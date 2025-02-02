//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos_participantes = [];
console.log(amigos_participantes);


/* FUNÇÃO CAPTURAR NOME DO AMIGO */

function adicionarAmigo() {

    let inputNome = document.getElementById("amigo").value.trim(); // Remove espaços extras;
    
    if (inputNome == ""){
        alert("Digite um nome, o campo não pode estar vazio!")
    } else if (amigos_participantes.includes(inputNome)) {
        alert("Este nome já está na lista, por favor digite outro nome!");
    } else {
        amigos_participantes.push(inputNome); // Adiciona ao array
        atualizarLista(); // Atualiza a exibição
        limparCampo(); // Limpa o inputNome
    }
}

/* FUNÇÃO ATUALIZAR LISTA DE NOMES DOS AMIGOS PARTICIPANTES */

function atualizarLista() {
    let listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos_participantes.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        listaNomes.appendChild(li);
    });
}

function limparCampo() {
    inputNome = document.getElementById('amigo');
    inputNome.value = '';
}