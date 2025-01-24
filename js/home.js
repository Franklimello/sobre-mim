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
