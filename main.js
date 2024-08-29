$(document).ready(function() { //ready serve para rodar o codigo após o carregamento total da página
    // Adiciona uma nova tarefa
    $('#adicionar-tarefa').click(function() {
        var taskText = $('#anotar-tarefa').val().trim(); //O método trim() retorna o texto sem espaços em branco no início e/ou fim da string.
        if (taskText !== '') {
            var taskItem = $('<li>').text(taskText); //O método . text() obtém ou define o texto de um elemento HTML .
            var removeButton = $('<button>').addClass('remove').text('Remover');
            /*O método addClass() adiciona um ou mais nomes de classe aos elementos selecionados . 
            Este método não remove atributos de classe existentes, ele apenas adiciona um ou mais nomes de classe ao atributo de classe.*/
            taskItem.append(removeButton);
            /*O método append() da Interface FormData adiciona um novo valor dentro de uma chave existente dentro do objeto FormData - 
            ou adiciona a chave caso ainda não exista.*/
            $('#lista-tarefa').append(taskItem);
            $('#anotar-tarefa').val('');
        }
    });

        // Marca ou desmarca uma tarefa como concluída
    $('#lista-tarefa').on('click', 'li', function() {  //O this faz referência ao objeto do qual a função é uma propriedade
        $(this).toggleClass('completed');
    });

    // Remove uma tarefa
    $('#lista-tarefa').on('click', '.remove', function() {
        $(this).parent().remove();
        /*O método parents() nos permite pesquisar os ancestrais desses elementos na árvore DOM 
        e construir um novo objeto jQuery a partir dos elementos correspondentes, ordenados do pai imediato para cima*/
    });

    // Adiciona a tarefa ao pressionar Enter
    $('#anotar-tarefa').keypress(function(e) {
        if (e.which === 13) {
            $('#adicionar-tarefa').click();
        }
    });
});

