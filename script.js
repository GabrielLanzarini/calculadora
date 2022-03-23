var botoesNumeros = document.querySelectorAll('.numeros');
var displayNumeros = document.getElementById('display');
var arrayNumeros = []

botoesNumeros.forEach(function(e){
    e.addEventListener('click', function(){
        arrayNumeros.push(e.textContent)
        displayNumeros.value =  arrayNumeros
    })
})