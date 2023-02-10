function calcular(){ 
    
var numf = document.querySelector('input#numero')
var num = Number(numf.value)
var res = document.querySelector('div#res')
var c = 1
var resultado = 0
res.innerHTML = ''

if (numf.value.length == 0){
    window.alert('Por favor digite um numero')
} else{
    while (c <= 10){
        resultado = num*c
        res.innerHTML += `${num} X ${c} = ${resultado} <br>` 
        c++
    }
    }

//res.innerHTML = `teste ${num}`


}