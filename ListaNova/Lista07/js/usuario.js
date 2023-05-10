const express = require('express')
const app = express()
const port = 8003

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

// --------- SERVIDOR RODANDO ------------------------------
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}/usuarios`)
})