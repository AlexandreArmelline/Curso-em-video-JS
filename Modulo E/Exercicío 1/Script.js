function contar(){
var iniciof = document.querySelector('input#inc')
var inicio = Number(iniciof.value)
var fimf = document.querySelector('input#fim')
var fim = Number(fimf.value)
var passof = document.querySelector('input#passo')
var passo =  Number(passof.value)
var resposta = document.querySelector('div#resposta')
var c = inicio

if (passo <= 0){
    window.alert('Passo invalido! considerando PASSO 1')
    passo = 1
}

if (iniciof.value.length == 0 ){
    window.alert('Campo "Incio" é obrigatório ')
    resposta.innerHTML = 'impossível contar!'
}
if (fimf.value.length == 0 ) {
    window.alert('campo "Fim" é obrigatório')
    }
if (passof.value.length == 0){
    window.alert('Campo "Passo" é obrigatório')
}     
else {

resposta.innerHTML = `Contando: <br>`
//contagem crescente
if (inicio < fim){
    do{
    resposta.innerHTML += `${c}  `
    c = c + passo
} while (c <= fim)
}else {
    //contagem regressiva
    do{
        resposta.innerHTML += `${c}  `
        c = c - passo
    } while (c >= fim)

}

}
}

