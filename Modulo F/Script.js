    var numf = document.querySelector('input#num')
   
    var flist = document.querySelector('select#flist')
    var res2 = document.querySelector('div#res2')
    var valores = []

    function validarNum(n){
        if (Number(n) >= 0 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function inList(n, v){
        if (v.indexOf(Number(n)) != -1){
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

        } else {
            window.alert('Valor invalido ou ja encontrado na lista')
        }

        numf.value = ''
        numf.focus()
       
    }

   