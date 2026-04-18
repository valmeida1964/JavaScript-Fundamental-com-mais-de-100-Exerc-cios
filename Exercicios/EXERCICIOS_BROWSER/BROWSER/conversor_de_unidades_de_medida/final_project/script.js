/* 
Conversor de Unidades de Medida
--------------------------------------------------------------------------
Este é um projeto de conversão de unidades de medida de comprimento.
Vamos definir a unidade de entrada e a unidade de saída, e o usuário vai indicar o valor a ser convertido.
O resultado será exibido na tela após o clique no botão "Converter".
*/

// elementos da DOM
const unidadeEntrada = document.querySelector("#unidadeEntrada");
const unidadeSaida = document.querySelector("#unidadeSaida");
const valorInserido = document.querySelector("#valor");

document.querySelector("#converter").addEventListener('click', () => {

    let unidadeEntradaSelecionada = unidadeEntrada.value;
    let unidadeSaidaSelecionada = unidadeSaida.value;
    let valor = parseFloat(valorInserido.value);

    // validar o número inserido
    if(isNaN(valor)){
        document.querySelector("#resultado").textContent = "Por favor insira um valor numérico válido.";
        return;
    }

    // conversão das unidades
    const resultado = converterUnidades(unidadeEntradaSelecionada, unidadeSaidaSelecionada, valor);

    // exibir o resultado
     document.querySelector("#resultado").textContent = `
     Resultado: ${valor} ${nomeUnidade(unidadeEntradaSelecionada)}(s) é igual a ${resultado} ${nomeUnidade(unidadeSaidaSelecionada)}(s)
     `;

});

function converterUnidades(unidadeEntrada, unidadeSaida, valor){
    /* 
    NOTA: A taxa de conversão é baseada no metro como unidade base.
    Exemplo: 1 quilômetro = 1000 metros
    */
    const taxasConversao = {
            qilometro: 1000,
            metro: 1,
            centimetro: 0.01,
            milimetro: 0.001,
            milha: 1609.34,
            jarda: 0.9144,
            pe: 0.3048,
            polegada: 0.0254
    };

    // converter primeiro para metros
    const valorEmMetros = valor * taxasConversao[unidadeEntrada];

    // converter o valor de metros para a unidade da saída
    return valorEmMetros / taxasConversao[unidadeSaida];
}

function nomeUnidade(unidade){
    
    const unidades = {
        qilometro: 'Quilômetro',
        metro: 'Metro',
        centimetro: 'Centímetro',
        milimetro: 'Milímetro',
        milha: 'Milha',
        jarda: 'Jarda',
        pe: 'Pé',
        polegada: 'Polegada',
    };

    return unidades[unidade] || unidade;
}