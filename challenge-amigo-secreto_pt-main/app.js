//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigo = [];

//Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

function adicionarAmigo(){
    let entrada = document.querySelector('#amigo'); //Capturar o valor do campo de entrada
    let lista = document.querySelector('#listaAmigos'); 

//Validar a entrada
    if (entrada.value.trim() === '') {
        alert('Por favor, insira um nome.');  
        return; 
    }

}

