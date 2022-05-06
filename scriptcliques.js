var botoesNumeros = document.querySelectorAll('.numeros');
var displayNumeros = document.getElementById('display');

var numerosDisplay = ''
var operacao = ''
var valores = []
var valorResultado = null;

botoesNumeros.forEach(function(e){
    e.addEventListener('click', function(){
        numerosDisplay += e.textContent
    })
})

document.addEventListener('click', function(event){
    let botao = event.target;

    if(botao.id == 'calcular') calcular();
    else if (botao.textContent == '-'){
        operacao = '-';
        verificacaoAtribuicao();
}
    else if (botao.textContent == '+'){
        operacao = '+';
        verificacaoAtribuicao();
}
    else if (botao.textContent == 'x'){
        operacao = '*';
        verificacaoAtribuicao();
}
    else if (botao.textContent == '/'){
        operacao = '/';
        verificacaoAtribuicao();
}   else if (botao.textContent == 'Limpar'){
        limpar();
}
    
    console.log(valores)
    displayNumeros.textContent=numerosDisplay;
})

function calcular(){
    console.log(valores);
    if (valores == '') return;
    else if (operacao == '+'){
        valores.push(parseInt(numerosDisplay));
        valorResultado = parseInt(valores[0]) + parseInt(valores[1])
        organizaValores(valorResultado);
    } else if (operacao == '-'){
        valores.push(parseInt(numerosDisplay));
        valorResultado = parseInt(valores[0]) - parseInt(valores[1])
        organizaValores(valorResultado);
    }else if (operacao == '*'){
        valores.push(parseInt(numerosDisplay));
        valorResultado = parseInt(valores[0]) * parseInt(valores[1])
        organizaValores(valorResultado);
    }else if (operacao == '/'){
        valores.push(parseInt(numerosDisplay));
        valorResultado = parseInt(valores[0]) / parseInt(valores[1])
        organizaValores(valorResultado);
    }
}

function verificacaoAtribuicao(){

    if(numerosDisplay == ''){
        alert('Digite um valor')
    }else if(valorResultado == null){
        valores.push(parseInt(numerosDisplay));
        numerosDisplay = ''
    } else{
        numerosDisplay = ''
    }
}

function organizaValores(valor){
    numerosDisplay = valorResultado;
    valores = [];
    valores.push(valorResultado)
    operacao = ''
}

function limpar(){
    numerosDisplay = ''
    operacao = ''
    valores = []
    valorResultado = null;
}