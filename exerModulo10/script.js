$(document).ready(function(){
    

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Coloque seu telefone'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Informe seu CPF'
    });
    $('#cep').mask('00000-000', {
        placeholder: 'Informe seu CEP'
    }
    );
})