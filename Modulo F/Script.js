

function add(){

    var valores = []
    var res = document.querySelector('#res')
    var numf = document.querySelector('#num')
    var num = Number(numf.value)
    if (num < 0 || num > 100) {
        window.alert('Por favor digite um valor entre 0 e 100')
    } else {
        valores.push(num)
        for(var pos in valores)
        res.innerHTML += `${valores[pos]} <br>`
      
    }  
}

function final(){
    
    var res2 = document.querySelector('#res2')


    res2.innerHTML = 'ooooo'
}