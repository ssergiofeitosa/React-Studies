// const addTarefa = document.getElementById("add")as HTMLButtonElement  //botao de adicionar
// const removeTarefa = document.getElementById("remove")as HTMLButtonElement //botao remover
// const tarefaInput = document.getElementById("tarefa")as HTMLTextAreaElement //input em text da tarefa a ser adicionada
// const itemsLista = document.getElementById("todo")as HTMLOListElement  //itens da lista de tarefas  ol//
// addTarefa.addEventListener("click", ()=>{

//     if(tarefaInput.value!=""){
//         const novaTarefa = document.createElement("li")          //nova tarefa é criada como um elemento li que vai para a ol(itemsLista)
//         novaTarefa.innerText=tarefaInput.value;              //o texto da nova tarefa recebe o conteudo/valor do tarefa input
//         novaTarefa.classList.add('novaTarefa')               //atribui à li criada a classe 'novaTarefa'
//         itemsLista.appendChild(novaTarefa)                   //adiciona a li criada na ol
//     }
//         tarefaInput.value=""                //reseta o conteúdo da caixa de texto do input

// })
// removeTarefa.addEventListener("click",()=>{

//     const tarefaAremover = document.getElementsByClassName("novaTarefa")[0] as HTMLLIElement   //busca o primeiro elemento da classe 'novaTarefa'

//     tarefaAremover.remove()                                                                    //remove o elemento

// })

const addTarefa = document.getElementById("add") as HTMLButtonElement; //botao de adicionar
const removeTarefa = document.getElementById("remove") as HTMLButtonElement; //botao remover
const tarefaInput = document.getElementById("tarefa") as HTMLTextAreaElement; //input em text da tarefa a ser adicionada
const itemsLista = document.getElementById("todo") as HTMLOListElement; //itens da lista de tarefas  ol//
addTarefa.addEventListener("click", () => {
  if (tarefaInput.value != "") {
    const novaTarefa = document.createElement("li"); //nova tarefa é criada como um elemento li que vai para a ol(itemsLista)
    novaTarefa.innerText = tarefaInput.value; //o texto da nova tarefa recebe o conteudo/valor do tarefa input
    novaTarefa.classList.add("novaTarefa"); //atribui à li criada a classe 'novaTarefa'
    itemsLista.appendChild(novaTarefa); //adiciona a li criada na ol

    const botaoRemove = document.createElement("button");
    botaoRemove.classList.add("btnremove");
    botaoRemove.innerText = "Remover";
    novaTarefa.appendChild(botaoRemove);

    botaoRemove.addEventListener("click", () => {
      botaoRemove.parentElement?.remove();
    });
  }
  tarefaInput.value = ""; //reseta o conteúdo da caixa de texto do input
});
