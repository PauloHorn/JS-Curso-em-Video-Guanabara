function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'manha-p.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'manha-p.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'manha-p.png')
            } else {
                //idoso
                img.setAttribute('src', 'manha-p.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'manha-p.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'manha-p.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'manha-p.png')
            } else {
                //idoso
                img.setAttribute('src', 'manha-p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com idade de: ${idade} anos`
        res.appendChild(img)
    }
}