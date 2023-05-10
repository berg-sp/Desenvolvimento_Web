let express = require('express')
let app = express()
let port = 8000
//http://localhost:8000/

let bandas = [
    {
        id: 1,
        nome: "Pink Floyd",
        principaisMusicas: ['Another Brink in the Wall', 'Confortably numb', 'Hey you'],
        integrantes: [
            {
                nome: 'David Gilmour',
                pais: 'Inglaterra',
                idade: 77
            },
            {
                nome: 'Nick Mason',
                pais: 'Inglaterra',
                idade: 79
            },
            {
                nome: 'Richard Wrigth',
                pais: 'Inglaterra',
                idade: 65
            }
        ]
    },
    {
        id: 2,
        nome: "Aerosmith",
        principaisMusicas: ['Crazy', 'Janes got a gun', 'Jaded'],
        integrantes: [
            {
                nome: 'Steven Tyler',
                pais: 'Estados Unidos',
                idade: 75
            },
            {
                nome: 'Joe Perry',
                pais: 'Estados Unidos',
                idade: 72
            },
            {
                nome: 'Joey Kramer',
                pais: 'Estados Unidos',
                idade: 72
            }
        ]
    },
    {
        id: 3,
        nome: "Sepultura",
        principaisMusicas: ['Roots Bloody Roots', 'Ratamahatta', 'Orgasmatron'],
        integrantes: [
            {
                nome: 'Max Cavalera',
                pais: 'Brasil',
                idade: 53
            },
            {
                nome: 'Andreas Kisser',
                pais: 'Brasil',
                idade: 54
            },
            {
                nome: 'Derrick Green',
                pais: 'Estados Unidos',
                idade: 52
            }
        ]
    }
]

app.get("/", function (requisicao, resposta) {
    return resposta.send("bandas")
})

// --------- SERVIDOR RODANDO ------------------------------
app.listen(port, function () {
    console.log(`servidor rodando https://localhost:${port}`)

})