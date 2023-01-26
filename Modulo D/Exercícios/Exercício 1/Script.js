function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `São ${hora}:${minutos}` 
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'Manha.jpg'
        document.body.style.background = 'rgb(147, 164, 236)'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'Tarde.jpg'
        document.body.style.background = 'rgb(241, 170, 64)'
    } else{
        // Boa noite
        img.src = 'Noite.jpg'
        document.body.style.background = 'rgb(54, 2, 52)'
    }
}