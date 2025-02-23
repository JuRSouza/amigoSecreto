//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = [];

//Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

function adicionarAmigo(){
    let entrada = document.querySelector('#amigo'); //Capturar o valor do campo de entrada
//Validar a entrada- usando o trim para retirar os espaços e toLowerCase para deixar todas as letras em minúsculas
    if (entrada.value.trim().toLowerCase() === '') {
        alert('Por favor, insira um nome.');  
        return; 
    }
    //Atualizar o array de amigos, usando o método .push()
    let nome = entrada.value.trim().toLowerCase();
    nomeAmigo.push(nome);
    entrada.value = ""; // limpando a entrada de nomes

    AtualizarLista();
}

function AtualizarLista(){
    let lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = ""; //Limpar a lista existente

    //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    for (let i = 0; i < nomeAmigo.length; i++){
        let novoNome = document.createElement('li'); //adicione cada nome como um elemento <li> dentro de uma lista HTML.  
        novoNome.textContent = nomeAmigo[i];
        lista.appendChild(novoNome);// insere o nome na lista 
    }
            
}

function sortearAmigo (){ //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    if (nomeAmigo.length === 0) {
        alert('Por favor, insira um nome.');  
        return; 
    }
    //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
    let indiceAleatorio = Math.floor(Math.random() * nomeAmigo.length);

    //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
    let amigoSorteado = nomeAmigo[indiceAleatorio];


    document.getElementById('resultado').innerHTML = `${amigoSorteado}`;

}
