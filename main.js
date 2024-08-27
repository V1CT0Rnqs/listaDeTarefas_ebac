$(document).ready(function() {
    // Adiciona uma nova tarefa
    $('#adicionar-tarefa').click(function() {
        var taskText = $('#anotar-tarefa').val().trim();
        if (taskText !== '') {
            var taskItem = $('<li>').text(taskText);
            var removeButton = $('<button>').addClass('remove').text('Remover');
            taskItem.append(removeButton);
            $('#lista-tarefa').append(taskItem);
            $('#anotar-tarefa').val('');
        }
    });

        // Marca ou desmarca uma tarefa como concluída
    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Remove uma tarefa
    $('#lista-tarefa').on('click', '.remove', function() {
        $(this).parent().remove();
    });

    // Adiciona a tarefa ao pressionar Enter
    $('#anotar-tarefa').keypress(function(e) {
        if (e.which === 13) {
            $('#adicionar-tarefa').click();
        }
    });
});

