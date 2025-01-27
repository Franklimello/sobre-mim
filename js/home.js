function claroEscuro() {
    const lampada = document.querySelector('#luz')
    const body = document.querySelector('.pg__principal')
    const p_lampada = document.querySelector('.noturno')
    let lampadaAcesa = false
    lampada.addEventListener('click', () => {
        lampadaAcesa = !lampadaAcesa
        if (lampadaAcesa) {
            lampada.src = 'img/acesa.png'
            body.classList.remove('modo-escuro')
            body.classList.add('modo-claro')
            p_lampada.innerHTML = 'Claro'
        }else {
            lampada.src = "img/lampada-apagada.png"  
            body.classList.remove('modo-claro')
            body.classList.add('modo-escuro')
            p_lampada.innerHTML = 'modo noturno'
        }
         
    })
}
claroEscuro();


function mudaCOR(classe, corpo,cor) {
    const btn_cor = document.querySelector(classe)
    btn_cor.addEventListener('click', () => {
        const body = document.querySelector(corpo)
        body.className = ''
        body.style.backgroundColor = ''
        body.style.backgroundColor = cor
        console.log(btn_cor)
    })
}

mudaCOR('.azul', '.pg__principal', 'blue')
