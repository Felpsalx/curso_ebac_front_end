const campoA = document.querySelector('#cmp-a');
const campoB = document.querySelector('#cmp-b');
const Form = document.querySelector('#form');
const msgerror = document.querySelector('.msgERROR');
const camps = document.querySelector('.campos');

const msgpositiva = document.querySelector('.msgPositiva');
const msgiguais = document.querySelector('.msgIguais')
const error = `O valor do campo <B>A</b> é maior que o valor do campo <b>B</b>`;
const positivo = `Os valores dos campos são validos`;
const iguais = `Os valores são iguais`;

const botao = document.querySelector('#button');





Form.addEventListener('submit', (e)=>{
    e.preventDefault();
    msgiguais.style.display = 'none';
    msgerror.style.display = 'none';
    msgpositiva.style.display = 'none';
    campoA.value = '';
    campoB.value = '';
    campoA.classList.remove('error');
    campoB.classList.remove('error');
    campoB.classList.remove('positivo');
    campoA.classList.remove('positivo');  
})

camps.addEventListener('keyup', ()=>{
    
    if(campoB.value > campoA.value){
        botao.disabled = false;
        botao.style = '';
        msgpositiva.innerHTML = positivo;
        msgerror.style.display = 'none';
        msgiguais.style.display = 'none';
        msgpositiva.style.display= 'block';
        campoA.classList.remove('error');
        campoB.classList.add('positivo');
        campoA.classList.add('positivo');

    }else if(campoB.value === campoA.value){
        botao.disabled = false;
        botao.style = '';
        msgiguais.style.display = 'block';
        msgiguais.innerHTML = iguais;
        msgpositiva.style.display = 'none';
        msgerror.style.display = 'none';
        campoA.classList.remove('error');
        campoB.classList.remove('positivo');
        campoB.classList.remove('error');
        campoA.classList.remove('positivo');

    }else{
        botao.disabled = true;
        msgerror.innerHTML = error;
        botao.style.cursor = 'not-allowed'
        msgpositiva.style.display = 'none';
        msgiguais.style.display = 'none';
        msgerror.style.display = 'block';
        campoA.classList.add('error');
        campoB.classList.add('error');
        campoB.classList.remove('positivo');
        campoA.classList.remove('positivo');
    }
})



