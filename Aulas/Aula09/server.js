const express = require('express')
const app = express()
const port = 8070
const mongoose = require('mongoose')
const connection = "mongodb+srv://admin:teste123@appdb.4bubptv.mongodb.net/"
const Produto = require('./models/produto')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json({ produtos: produtos })
    } catch (error) {
        return res.status(400).json({ error: "Erro! Tente novamente." })
    }
})

mongoose.connect(connection, {
    dbName: 'ProdutosDB'
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})