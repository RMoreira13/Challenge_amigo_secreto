//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosParticipantes = [];
let listaSorteada = [];

/* FUNÇÃO CAPTURAR NOME DO AMIGO */

function adicionarAmigo() {

    let inputNome = document.getElementById("amigo").value.trim(); // Remove espaços extras;
    
    if (inputNome == ""){
        alert("Digite um nome, o campo não pode estar vazio!")
    } else if (amigosParticipantes.includes(inputNome)) {
        alert("Este nome já está na lista, por favor digite outro nome!");
        limparCampo(); // Limpa o inputNome
    } else {
        amigosParticipantes.push(inputNome); // Adiciona ao array
        atualizarLista(); // Atualiza a exibição
        limparCampo(); // Limpa o inputNome
    }
}

/* FUNÇÃO ATUALIZAR LISTA DE NOMES DOS AMIGOS PARTICIPANTES */

function atualizarLista() {
    let listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigosParticipantes.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        listaNomes.appendChild(li);
    });
}

/* FUNÇÃO LIMPAR CAMPO DO INPUT AO ADICIONAR UM NOME */

function limparCampo() {
    inputNome = document.getElementById("amigo");
    inputNome.value = "";
}

/* FUNÇÃO SORTEAR UM NOME DA LISTA */

function sortearAmigo() {

    // Verifica se há amigos na lista
    if (amigosParticipantes.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum nome disponível para o sorteio!";
        return;
    }

    // Gerar um índice aleatório dentro do tamanho do array
    let indiceNome = Math.floor(Math.random() * amigosParticipantes.length);

    // Obter o nome sorteado
    let amigoSorteado = amigosParticipantes[indiceNome];

        // Validar se ainda possui amigo para ser sorteado
        if(listaSorteada.length === amigosParticipantes.length){
            document.getElementById("resultado").innerHTML = "Todos os nomes já foram sorteados";
            return;
        } else
            if(listaSorteada.includes(amigoSorteado)){
                return sortearAmigo();
            } else {
                listaSorteada.push(amigoSorteado);
            }

    // Mostrar o resultado na tela
    document.getElementById("resultado").innerHTML = `O nome sorteado é: <strong>${amigoSorteado}</strong>`;
}