let express = require('express')
let app = express()
let port = 8000
//http://localhost:8000/
let produtos = [
    {
        id: 1,
        nome: "Bolo de milho",
        descrição: "Puro suco do milho verde",
        valor: 25
    },
    {
        id: 2,
        nome: "Bolo de murangu",
        descrição: "Bolo top demais!!!!!",
        valor: 100
    }
]

app.get("/", function (requisicao, resposta) {
    return resposta.send("Ola mundo")
})

// --------- SERVIDOR RODANDO ------------------------------
app.listen(port, function () {
    console.log(`servidor rodando https://localhost:${port}`)

})