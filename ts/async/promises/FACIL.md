FACIL

1. Criar e Alterar Elementos
Crie uma página com um botão que, ao ser clicado, adicione um parágrafo ao final da página.
Adicione uma caixa de texto (input) e um botão que, ao clicar, insira o texto digitado em um parágrafo abaixo.
2. Manipulação de Atributos
Crie uma imagem com um botão que altere o atributo src da imagem para exibir uma foto diferente.
Adicione um botão que desabilite outro botão na página.
3. Eventos e Interatividade
Crie uma lista (ul) vazia e um botão que adicione itens (li) à lista ao ser clicado.
Crie um campo de texto que mostre o número de caracteres digitados em tempo real.
Crie um botão que, ao ser clicado, altere o fundo da página para uma cor aleatória.
4. Manipulação de Estilos
Adicione um botão que, ao ser clicado, altere o estilo de um elemento (por exemplo, aumentar a fonte ou mudar a cor do texto).
Crie um botão que aplique ou remova uma classe CSS de um elemento.
5. Navegação pelo DOM
Adicione três caixas de texto (input) com valores iniciais e um botão que some os valores e mostre o resultado em um parágrafo.
Adicione um botão que percorra uma lista e destaque (bold, por exemplo) o próximo item da lista a cada clique.
6. Exibição e Ocultação
Crie um botão que esconda ou mostre uma imagem ao ser clicado (efeito toggle).
Crie uma tabela com uma linha inicial e um botão que oculte a linha clicada.
7. Formulários e Validação
Crie um formulário com campos para Nome e Email. Ao clicar em "Enviar", valide se os campos estão preenchidos e exiba uma mensagem de erro, se necessário.
Adicione um botão de reset que limpe todos os campos de um formulário.
8. Timer e Intervalos
Crie um botão que inicie um contador que aumenta a cada segundo e outro botão que pare o contador.
Adicione um cronômetro que conta 10 segundos e exibe "Tempo esgotado!" quando o tempo acabar.
9. Interação com o Usuário
Crie um campo de texto que exiba uma mensagem ao usuário quando ele sair do campo (blur).
Crie uma caixa de seleção (checkbox) que desabilita um botão quando marcada.
10. Desafios Extras
Crie uma lista de tarefas (to-do list) onde o usuário possa adicionar, marcar como concluído e excluir tarefas.
Crie um carrossel simples de imagens que alterna automaticamente a cada 3 segundos, com botões de "Próximo" e "Anterior".






MEDIANO

1. Contador Dinâmico
Descrição:
Crie um contador com botões para incrementar, decrementar e resetar o valor exibido.

Requisitos:

Use addEventListener para manipular os cliques nos botões.
Exiba o valor atual do contador no DOM.
Garanta a tipagem de variáveis e eventos no código TypeScript.
Adicione uma lógica para impedir que o contador vá abaixo de zero.
2. Alterador de Tema (Dark/Light)
Descrição:
Crie um botão que alterne entre tema claro e tema escuro na página.

Requisitos:

Utilize classes CSS para definir os dois temas.
Ao clicar no botão, troque as classes no elemento body.
Garanta que o botão atualize o texto para "Ativar Tema Escuro" ou "Ativar Tema Claro".
Use TypeScript para tipar corretamente o evento e os elementos manipulados.
3. Lista de Tarefas (To-Do List)
Descrição:
Desenvolva uma lista de tarefas que permite adicionar e remover itens.

Requisitos:

Input para digitar a tarefa.
Botão "Adicionar" que insere a tarefa na lista.
Cada tarefa deve ter um botão "Remover" para excluí-la.
Adicione validação para impedir tarefas vazias.
Garanta a tipagem de eventos e estruturas no código.
4. Manipulação de Imagens com Botões
Descrição:
Crie uma aplicação que troca uma imagem ao clicar em diferentes botões.

Requisitos:

Renderize três botões (por exemplo: "Imagem 1", "Imagem 2", "Imagem 3").
Ao clicar em um botão, atualize a imagem exibida na tela.
Use um elemento <img> no HTML e manipule o atributo src.
Tipagem adequada de elementos e eventos no TypeScript.
5. Barra de Progresso Dinâmica
Descrição:
Desenvolva uma barra de progresso que aumenta ou diminui ao clicar em botões.

Requisitos:

Renderize uma barra visual (pode ser um <div> com largura dinâmica).
Botões: "Aumentar" e "Diminuir" para controlar o progresso (10% por clique).
Limite o progresso de 0% a 100%.
Utilize manipulação de estilos com TypeScript para alterar a largura da barra.
6. Filtro de Itens de uma Lista
Descrição:
Crie uma lista de itens e um campo de busca para filtrar os itens exibidos.

Requisitos:

Renderize uma lista com pelo menos 10 itens (nomes fictícios).
Adicione um campo de input para busca.
Ao digitar no campo, filtre os itens que contêm o texto buscado.
Atualize a exibição da lista no DOM dinamicamente.
Use input e keyup para capturar eventos e tipagem TypeScript.
7. Temporizador (Timer) com Controles
Descrição:
Crie um temporizador que exibe segundos e possui botões para iniciar, pausar e resetar.

Requisitos:

Exiba o tempo atual no DOM em formato 00:00.
Botões: "Iniciar", "Pausar" e "Resetar".
Utilize o método setInterval para atualizar o tempo.
Garanta que não seja possível iniciar o temporizador mais de uma vez.
Utilize TypeScript para tipar o setInterval corretamente.
8. Galeria de Imagens com Navegação
Descrição:
Crie uma galeria de imagens com botões "Anterior" e "Próximo".

Requisitos:

Renderize uma imagem no DOM usando um <img>.
Tenha um array de URLs de imagens.
Use os botões "Próximo" e "Anterior" para navegar entre as imagens.
Impeça a navegação quando atingir o início ou o final da galeria.
Use tipagem TypeScript para o array e eventos.
9. Menu de Navegação Interativo
Descrição:
Crie um menu de navegação que destaca a seção ativa ao clicar em um item.

Requisitos:

Renderize uma lista de links (menu).
Ao clicar em um link, adicione uma classe de destaque (active) e remova dos outros.
Use manipulação de classes CSS para estilizar o link ativo.
Garanta a tipagem do evento de clique no TypeScript.
10. Contador de Caracteres em um Campo de Texto
Descrição:
Crie um campo de texto que exibe a contagem de caracteres digitados em tempo real.

Requisitos:

Adicione um input de texto no HTML.
Mostre abaixo do input o número de caracteres digitados.
Configure um limite máximo (ex.: 100 caracteres). Quando ultrapassado, exiba uma mensagem de aviso.
Use input e keyup para atualizar a contagem dinamicamente.
Utilize tipos no TypeScript para eventos e variáveis.