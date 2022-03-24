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
    
    switch(botao.id){
    case 'somar':
        verificacaoAtribuicao();
        operacao='+'
        break;
    case 'subtrair':
        verificacaoAtribuicao();
        operacao='-'
        break;
    case 'multiplicar':
        verificacaoAtribuicao();
        operacao='*'
        break;
    case 'dividir':
        verificacaoAtribuicao();        
        operacao='/'
        break;
    }
    console.log(valores)
    displayNumeros.value=numerosDisplay;
})

document.getElementById('calcular').addEventListener('click', function(){
    valores.push(parseInt(numerosDisplay));
    
    if (operacao=='+'){
        valorResultado = parseInt(valores[0]) + parseInt(valores[1])
        numerosDisplay = valorResultado;
        valores = [];
        valores.push(valorResultado)
    } else if (operacao=='-'){
        valorResultado = parseInt(valores[0]) - parseInt(valores[1])
        numerosDisplay = valorResultado;
        valores = [];
        valores.push(valorResultado)
    }else if (operacao=='*'){
        valorResultado = parseInt(valores[0]) * parseInt(valores[1])
        numerosDisplay = valorResultado;
        valores = [];
        valores.push(valorResultado)
    }else if (operacao=='/'){
        valorResultado = parseInt(valores[0]) / parseInt(valores[1])
        numerosDisplay = valorResultado;
        valores = [];
        valores.push(valorResultado)
    }

})

function  verificacaoAtribuicao(){
    if(numerosDisplay == ''){
        alert('Digite um valor')
    }else if(valorResultado == null){
        valores.push(parseInt(numerosDisplay));
        numerosDisplay = ''
    } else{
        numerosDisplay = ''
    }
}