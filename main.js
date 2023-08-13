$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const input = $('#tarefa').val();
        const addTarefa = $('<li></li>');
        $(`<li>${input}</li>`).appendTo(addTarefa)
        $(addTarefa).appendTo('ul')
        $('#tarefa').val('')

        $('li').click(function(){
            $(this).addClass('feito')
            
        })
    })
})