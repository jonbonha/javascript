function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas. `

    if (hora >= 0 && hora <= 12) {
       img.innerHTML =('<img src="manha.png">')
        document.body.style.background='#5eb3ab'
    }else if (hora >= 12 && hora <= 18){
        img.innerHTML =('<img src="tarde.png">')
        document.body.style.background='#b9846f'
    }else {
        img.innerHTML =('<img src="noite.png">')
        document.body.style.background='#515154'
    }
}