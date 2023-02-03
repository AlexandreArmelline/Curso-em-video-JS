function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var res2 = document.querySelector('div#res2')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {  
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src', 'Menino.jpg')
           } else if (idade < 30){
            //jovem
            img.setAttribute('src', 'Homem joven.jpg')
           } else if (idade < 50){
            // adulto
            img.setAttribute('src', 'Homem.jpg')
           }else {
            // idoso
            img.setAttribute('src', 'Idoso.jpg')
           }
       } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src', 'Menina.jpg')
           } else if (idade < 30){
            //jovem
            img.setAttribute('src', 'Mulher joven.jpg')
           } else if (idade < 50){
            // adulto
            img.setAttribute('src', 'Mulher.jpg')
           }else {
            // idoso
            img.setAttribute('src', 'Idosa.jpg')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${genero} com ${idade} anos`
       res2.innerHTML = ''
       res2.appendChild(img)
       res2.style.textAlign = 'center' 
       
       
    }
   
}
