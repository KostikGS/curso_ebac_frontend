$(document).ready(function() {
    // Ao submeter o formulário, adicionar a tarefa à lista
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        const taskName = $('#taskName').val();
        if (taskName.trim() !== '') {
            addTask(taskName);
            $('#taskName').val('');
        }
    });

    // Função para adicionar a tarefa à lista
    function addTask(taskName) {
        const $taskList = $('#taskList');
        const $taskItem = $('<li>').text(taskName);
        $taskItem.click(function() {
            // Ao clicar na tarefa, aplicar ou remover a linha atravessada
            $(this).toggleClass('completed');
        });
        $taskList.append($taskItem);
    }
});
