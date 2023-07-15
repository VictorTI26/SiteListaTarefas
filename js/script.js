//Selecionando eventos
let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdicionar = document.querySelector('#botao-adicionar');
let ListadeTarefas = document.querySelector('#lista-tarefas')

//salvar o nome

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarItemNaLista);

botaoAdicionar.addEventListener('click', function(){
    let nomeItem = ListadeTarefas.value;
    adicionarItemNaLista(nomeItem);

    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    ListadeTarefas.value = '';   
})

function adicionarItemNaLista(nomeItem){
    let itemLista = document.createElement('li');
    itemLista.innerText = nomeItem;
    campoTarefa.appendChild(itemLista);
}

//Preto e Branco
let botaoToggle = document.getElementById('toggle');

document.body.className = localStorage.getItem('modo') || 'modo-claro';

botaoToggle.addEventListener('click',function(){
    if(document.body.className === 'modo-claro'){
        document.body.className = 'modo-escuro'
    }else{
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo', document.body.className);

})

//Adicionando evento
botaoAdicionar.addEventListener('click', adicionarTarefa);

    //Adicionando tarefa com a tecla enter
    campoTarefa.addEventListener('keyup',function(enter) {
        if (enter.key === 'Enter'){
            adicionarTarefa();  
        }
    });

    //Criando e adicionando elementos
function adicionarTarefa() {
    //Pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;
    //Criando um elemento li        
    let novaTarefa = document.createElement('li');
    //Definindo o conteudo do elemento li 
    novaTarefa.innerText = nomeTarefa;

    //Adicionar o item da lista ao final da lista
    ListadeTarefas.appendChild(novaTarefa);

    //Adiiconar um ouvinte ao item da lista
    novaTarefa.addEventListener('click', function(){
        //Qundo o item da lista é clicado adicionamos a classe 'concluida'
        novaTarefa.classList.toggle("concluida");
    });

    //Removendo elementos
    //Criar botão de excluir
    let botaoExcluir = document.createElement("button");

    //Definir o texto do botão excluir  
    botaoExcluir.innerText = "Excluir";

    //Adicionar um ouvinte ao botão excluir
    botaoExcluir.addEventListener('click', function(){
        ListadeTarefas.removeChild(novaTarefa);
    });

    //Adicionar o item da lista ao final da lista 
    ListadeTarefas.appendChild(novaTarefa);

    //Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);

    //Limpar o campo de texto
    campoTarefa.value ="";
    //Classe do botão
    botaoExcluir.className = "botao-excluir";


};