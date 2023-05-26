const express = require('express')
const app = express()
const port = 8050

app.use(express.json())

let bancoDeDadosProdutos = []

app.post('/adicionar-produto', (req, res) => {
    let body = req.body

    console.log(body)

    bancoDeDadosProdutos.push(body)

    return res.status(201).json('produto adicionado com sucesso!')
})

app.get('/', (req, res) => {
    return res.status(200).json(bancoDeDadosProdutos)
})

app.listen(port, () => {
    console.log (`servidor rodando http://localhost:${port}`)
})