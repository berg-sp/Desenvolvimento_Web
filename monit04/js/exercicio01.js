var contaCorrente = {
    saldo: 2500,
    faturaAtual: 2000,
    creditoDisponivel: 0,
    extrato: {
        entrada:
        {
            data: "12/01/2020",
            valor: 120
        },
        {
            data: "12/01/2020",
            valor: 30
        },
        {
            data: "12/01/2020",
            valor: 15
        },
        saida:
            data: "12/01/2020";
            valor: 50,
            descrição: "Restaurante"

    }
    exibirExtrato: true; 
};

if (contaCorrente.saldo > contaCorrente.faturaAtual){
    console.log("Você possui saldo para pagar a fatura atual");
} else {
    console.log("Você não possui saldo suficiente para pagar a  fatura, experimente pegar crédito para conseguir pagar, imprima o valor de crédito disponível");
}

if (contaCorrente.exibirExtrato == true){
    // contaCorrente.extrato.entrada
    for(var i=0; i < contaCorrente.extrato.entrada.length; i++){
        var data = contaCorrente.extrato.entrada[i].data,
        var valor = contaCorrente.extrato.entrada[i].valor,
        console.log("Data : " + data + ", valor: " + valor),
    }

    for(var i=0; i < contaCorrente.extrato.entrada.length; i++){
        var data = contaCorrente.extrato.entrada[i].data,
        var valor = contaCorrente.extrato.entrada[i].descricao,
        console.log("Data : " + data + ", valor: " + valor + ", Descrição: " + descricao),
    }
}

