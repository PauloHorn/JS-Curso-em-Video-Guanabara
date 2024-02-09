function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = './imagens/manha-p.png'
        document.body.style.background = '#fefbf2'
    } else if(hora >= 12 && hora < 18) {
        img.src = './imagens/tarde-p.png'
        document.body.style.background = '#b0d1f2'
    } else {
        img.src = './imagens/noite-p.png'
        document.body.style.background = '#2f00c2'
    }
}
