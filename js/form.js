const nome = pegaElemento('#inome');
const idade = pegaElemento('#iidade');
const peso = pegaElemento('#ipeso');
const altura = pegaElemento('#ialtura');
const resultado = pegaElemento('#imsg');
const btn_calc = pegaElemento('.btn_calc');




btn_calc.addEventListener('click', (event) => {
    event.preventDefault();
    
    const dadosConvertidos = converterDados(altura, peso);
    altura.value = dadosConvertidos.altura;
    peso.value = dadosConvertidos.peso;

    let peso_valor = parseFloat(peso.value);
    let altura_valor = parseFloat(altura.value); 


    if (!verificarPreenchimento){
        resultado.style.color = 'red';
        resultado.value = 'Por favor preencha todos os campos'
    }else if(!naoNumero(peso_valor,altura_valor)) {
        resultado.style.color = 'red';
        resultado.value = 'Por favor preencha todos os campos'
    }else {
        let imc = calculaImc(peso,altura);
        resultado.value.color = 'white'
        resultado.value = exibirResultado(imc, peso, altura,nome);
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
    return `Sua altura e (${altura.value}M) e seu peso e (${peso.value}kg) e seu IMC e de (${imc}), obrigado por usar o programa ${nome.value}`
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