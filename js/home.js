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


function mudaCor(classe, corpo, cor) {
    const btn_cor = document.querySelector(classe);
    const body = document.querySelector(corpo);
    
    if (!btn_cor) {
        console.error('Botão não encontrado');
        return;
    } 
    if (!body) {
        console.error('Elemento do corpo não encontrado');
        return;
    }

    btn_cor.addEventListener('click', () => {
        console.log('Botão clicado');
        if (body.classList.contains('modo-claro')) {
            body.className = 'pg__principal modo-claro';
        
        } else if (body.classList.contains('modo-escuro')) {
            body.className = 'pg__principal modo-escuro';
            console.log('Modo escuro detectado');
        }
        body.style.backgroundColor = cor;
        console.log(`Cor alterada para: ${cor}`);

        
    });
}

mudaCor('.azul', '.pg__principal', 'lightblue');
mudaCor('.verde', '.pg__principal', 'lightgreen');
mudaCor('.vermelha', '.pg__principal', 'lightcoral');
mudaCor('.preto', '.pg__principal', '#444444');




