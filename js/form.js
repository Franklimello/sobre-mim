const nome = pegaElemento('#inome');
const idade = pegaElemento('#iidade');
const peso = pegaElemento('#ipeso');
const altura = pegaElemento('#ialtura');
const resultado = pegaElemento('#imsg');
const btn_calc = pegaElemento('.btn_calc');

preenchimento('#ialtura','altura')
preenchimento('#ipeso','peso')


btn_calc.addEventListener('click', (event) => {
    event.preventDefault();
    
    const dadosConvertidos = converterDados(altura, peso);
    altura.value = dadosConvertidos.altura;
    peso.value = dadosConvertidos.peso;

    let peso_valor = parseFloat(peso.value);
    let altura_valor = parseFloat(altura.value); 


    if (!verificarPreenchimento(nome,idade,peso,altura)){
        resultado.style.color = 'red';
        resultado.innerHTML = 'Por favor preencha todos os campos'
    }else if(!naoNumero(peso_valor,altura_valor)) {
        resultado.style.color = 'red';
        resultado.innerHTML = 'Por favor preencha todos os campos'
    }else {
        let imc = calculaImc(peso,altura);
        if (imc < 18.5){
            resultado.style.color = 'black'
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+exibiMsg(' Voce esta abaixo do peso'); 
        }else if (imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+ 'Seu peso esta normal'
        }else if (imc >=25.0 && imc <= 29.9){
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+exibiMsg(' Voce esta com sobrepeso');
        }else if (imc >= 30 && imc <= 34.9){
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+exibiMsg(' voce tem obesidade grau 1');
        }else if (imc >= 35.0 && imc <= 39.9){
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+exibiMsg(' voce esta com obesidade grau 2');
        }else {
            resultado.innerHTML = exibirResultado(imc, peso, altura,nome)+exibiMsg(' voce esta com obesidade grau 3 (mórbida)');
        }
        
    }
     
})



function pegaElemento (elemento){
    const el = document.querySelector(elemento);
    if (el) {
        return el;
    }else {
        console.error(`ERRO! Verifique o seletor ${elemento}`)
        return null;
    }
       
}

function naoNumero (... numeros) {
    for (numero of numeros){
        if(isNaN(numero)){
            return false;
        }
    }
    return true
}

function calculaImc (peso,altura){
    let peso_valor = parseFloat(peso.value);
    let altura_valor = parseFloat(altura.value);
    naoNumero(peso_valor,altura_valor)
    let imc = peso_valor/(altura_valor*altura_valor)
    return imc.toFixed(2);
}

function exibirResultado(imc, peso, altura,nome){
    return `Sua altura e (${altura.value}M) e seu peso e (${peso.value}kg) e seu IMC e de (${imc}), obrigado por usar o programa ${nome.value}! `
}

function verificarPreenchimento(nome,idade,peso,altura){
    if(nome.value == '' || idade.value == '' || altura.value == '' ||peso.value == ''){
        return false
    }
    return true
}

function converterDados(altura, peso) {
   
    const alturaConvertida = altura.value.toString().replace(',', '.');

    const pesoConvertido = peso.value.toString().replace(',', '.');

    const pesoFormatado = parseFloat(pesoConvertido).toFixed(1);

    return {
        altura: alturaConvertida,
        peso: pesoFormatado
    };
}

function exibiMsg(msg) {
    return `<span style="color: red;">${msg}</span>`;
}

function preenchimento(elemento, tipo) {
    const input = pegaElemento(elemento);
    input.addEventListener('input', (event) => {
        let valor = event.target.value.replace('.', '');
        if (tipo === 'altura' && valor.length >= 2) {
            valor = valor.substring(0, 1) + '.' + valor.substring(1);
        } else if (tipo === 'peso') {
            if (valor.length >= 4) {
                valor = valor.substring(0, 3) + '.' + valor.substring(3);
            } else if (valor.length >= 3) {
                valor = valor.substring(0, 2) + '.' + valor.substring(2);
            }
        }
        event.target.value = valor;
    });
}


