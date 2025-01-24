function destaqueFotos(selector, className) {
    const fotos = document.querySelectorAll(selector);
    fotos.forEach((foto) => {
        foto.addEventListener('click', (evt) => {
            foto.classList.toggle(className);
            evt.stopPropagation();
        })
    })

    document.body.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains(selector.replace('.', ''))) {
            const imagensDestaque = document.querySelectorAll(`.${className}`);
            imagensDestaque.forEach((img) => {
                img.classList.remove(className);
            });
        }
    });
}

destaqueFotos('.img', 'destaque');



function exibirFotos () {
    const mailow = document.querySelectorAll('.foto__mailow');
    const btn__mailow = document.querySelector('#exibi__fotos');
    let btn = false;
    btn__mailow.addEventListener('click', () => {
        btn = !btn;
        mailow.forEach((evt) => {
            
            if(btn) {
                evt.classList.remove('foto__mailow');
                evt.classList.add('exibir__mailow');
            }else {
                evt.classList.remove('exibir__mailow');
                evt.classList.add('foto__mailow');
            }
        })
    })
}

exibirFotos();

destaqueFotos('.foto__mailow', 'destaque');



