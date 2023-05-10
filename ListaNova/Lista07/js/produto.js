const express = require('express')
const app = express()
const port = 8002

let produto = [
    {
        nomeProduto: "Pia de mármore 200x70cm",
        descricao: "Pia de cozinha em mármore, com 200x70cm",
        valor: 350,
        criadoEm: "01/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Piso mármore guarujá 61x61cm",
        descricao: "Piso em mármore guarujo, com tamanho de 61x61cm, o metro quadrado",
        valor: 32,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Vaso sanitário com caixa",
        descricao: "Vaso sanitário de 8 litros, com caixa",
        valor: 160,
        criadoEm: "15/01/2023",
        emEstoque: false
    },
    {
        nomeProduto: "kit suporte banheiro",
        descricao: "kit suporte banheiro aluminio, com saboneteira, porta toalha e etc",
        valor: 49,
        criadoEm: "24/03/2023",
        emEstoque: false
    },
    {
        nomeProduto: "box acrilico 200x300cm",
        descricao: "box acrilico, com o tamnho de 200x300cm, na cor leitoso",
        valor: 205,
        criadoEm: "19/04/2023",
        emEstoque: true
    }
]

app.get("/produtos", function (requisicao, resposta) {
    return resposta.send(produto)
})

// --------- SERVIDOR RODANDO ------------------------------
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}/produtos`)

})