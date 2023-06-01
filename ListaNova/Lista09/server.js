const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:admin123@devsbar.iyki6or.mongodb.net/"
const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')

app.use(express.json())

app.get("/listar-bebidas", async (req, res) => {
    try {
        let bebidas = await Bebida.find()
        return res.status(200).json(bebidas)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.get("/listar-lanches", async (req, res) => {
    try {
        let lanches = await Lanche.find()
        return res.status(200).json(lanches)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-bebida', async (req, res) => {
    let { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

    let bebida = {
        nome,
        descricao,
        fabricante,
        emEstoque,
        publicadoEm
    }

    try {
        await Bebida.create(bebida)
        return res.status(201).json({ message: "Bebida cadastrada com sucesso!" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

app.post('/adicionar-lanche', async (req, res) => {
    let { nome, descricao, fabricante, vegano, emEstoque, publicadoEm } = req.body

    let lanche = {
        nome,
        descricao,
        fabricante,
        vegano,
        emEstoque,
        publicadoEm
    }

    try {
        await Lanche.create(lanche)
        return res.status(201).json({ message: "Lanche cadastrada com sucesso!" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

mongoose.connect(connectionString, {
    dbName: "DEVSBAR"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
}) 