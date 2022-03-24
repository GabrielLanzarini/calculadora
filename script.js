var botoesNumeros = document.querySelectorAll('.numeros');
var displayNumeros = document.getElementById('display');

var numerosDisplay = ''

document.addEventListener('click', function(event){
    let botao = event.target;
    switch(botao.id){
        case 'somar':
            armazenarValores();
            operacao = '+'
            numerosDisplay+='+'
            break;
        case 'subtrair':
            armazenarValores();
            operacao = '-'
            numerosDisplay+='-'
            break;
        case 'multiplicar':
            armazenarValores();
            operacao = '*'
            numerosDisplay+='*'
            break;
        case 'dividir':
            armazenarValores();
            operacao = '/'
            numerosDisplay+='/'
            break;
        }
    displayNumeros.value = numerosDisplay;
})

document.getElementById('calcular').addEventListener('click', function(){
    armazenarValores();
    if(operacao=='+'){
        numerosDisplay = valores[0] + valores[1]
        apagarValores();
    }else if(operacao=='-'){
        numerosDisplay = valores[0] - valores[1]
    }else if(operacao=='/'){
        numerosDisplay = valores[0] / valores[1]
    }else if(operacao=='*'){
        numerosDisplay = valores[0] * valores[1]
    }
})

function apagarValores(){
    valores[0] = numerosDisplay;
    valores.pop();
}

var arrayNumeros = []
var operacao = '';
var valores = [] 


botoesNumeros.forEach(function(e){
    e.addEventListener('click', function(){
        numerosDisplay += e.textContent
        arrayNumeros.push(e.textContent)
    })
})

function armazenarValores(){
    let valor = ''
    for (let i = 0; i < arrayNumeros.length; i++) {
        valor += arrayNumeros[i]
    }
    valores.push(parseInt(valor))
    arrayNumeros = []
}

document.getElementById('teste').addEventListener('click', function(){
    console.log(valores)
})