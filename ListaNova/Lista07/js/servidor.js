const express = require('express')
const app = express()
const port = 8005

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

let usuario = [
    {
        nomeUsuario: "Isaias",
        criadoEm: "15/12/2022",
        idade: 56,
        email: "isaias@email.com",
        isAdmin: true,
        telefone: "listaDeStrings",
        endereco: "listaDeStrings",
    },
    {
        nomeUsuario: "Paloma",
        criadoEm: "12/06/2019",
        idade: 65,
        email: "paloma@email.com",
        isAdmin: true,
        telefone: "listaDeStrings",
        endereco: "listaDeStrings",
    },
    {
        nomeUsuario: "Tiago",
        criadoEm: "03/08/2022",
        idade: 32,
        email: "tiago@email.com",
        isAdmin: false,
        telefone: "listaDeStrings",
        endereco: "listaDeStrings",
    },
    {
        nomeUsuario: "Gina",
        criadoEm: "23/11/2004",
        idade: 89,
        email: "gina@email.com",
        isAdmin: false,
        telefone: ['12-3456-7890', '09-8765-4321'],
        endereco: ['Rua da Flor, 65 - Bairro do orquidário', 'Rua plutão, 56 - Jd.Planetas'],
    },
    {
        nomeUsuario: "Leticia",
        criadoEm: "07/06/2011",
        idade: 29,
        email: "leticia@email.com",
        isAdmin: false,
        telefone: ['23-4567-8901', '34-5678-9'],
        endereco: ['Rua da pá, 01 - Jd.Construtor', 'Rua F1, 23 - pq.Esportes.']
    }
]

app.get("/usuarios", function (requisicao, resposta) {
    return resposta.send(usuario)
})

app.get("/produtos", function (requisicao, resposta) {
    return resposta.send(produto)
})

// --------- SERVIDOR RODANDO ------------------------------
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}/produtos`)

})ecrtta