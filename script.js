let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"



function formatarDinheiro(dinheiro) {

    const formatacao = dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatacao
}

function converter() {

    let input = document.getElementById("valor");
    let valor = parseFloat(input.value);
    console.log(valor);


    fetch(url)
        .then((res) => {

            return res.json();

        })
        .then((data) => {
            
           

            let rate = data.USDBRL.high;
            let date = new Date(data.USDBRL.create_date);
            let resultado = `${formatarDinheiro(valor)} Dolares é igual a ${formatarDinheiro(rate * valor)} em reais e centavos  na cotação  de ${date.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `

            
            document.getElementById("resultado").innerHTML = resultado;


        });
}