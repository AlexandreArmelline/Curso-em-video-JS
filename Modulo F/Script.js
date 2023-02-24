    var numf = document.querySelector('input#num')
    var flist = document.querySelector('select#flist')
    var res = document.querySelector('div#res')
    var valores = []

    function validarNum(n){
        if (Number(n) >= 0 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function inList(n, v){
        if (v.indexOf(n) != -1){
            return true
        } else {
            return false
        }

    }


    function add(){
        var num = Number(numf.value)
        if (validarNum(num) && !inList(num, valores)){
            valores.push(num)
            var item = document.createElement('option')
            item.text = num
            flist.appendChild(item)
            res.innerHTML = ''

        } else {
            window.alert('Valor invalido ou ja encontrado na lista')
        }

        numf.value = ''
        numf.focus()
       
    }

    function final(){
        if (valores.length == 0){
            window.alert('Add pelo menos um numero')
        } else {
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0
            for(var pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior){
                    maior = valores[pos]
                }
                if (valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            media = soma/tot
            res.innerHTML = ''
            res.innerHTML += `<p>${tot} numeros cadastrados</p>`
            res.innerHTML += `<p>O maior numero é ${maior}</p>`
            res.innerHTML += `<p>O menor numero é ${menor}</p>`
            res.innerHTML += `<p>A soma é ${soma}</p>`
            res.innerHTML += `<p>A media é ${media}</p>`
        }
    }

   