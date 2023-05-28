const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:admin123@appdatabase.wspfuht.mongodb.net/"
const animal = require('./models/animal')

app.use(express.json)

// ENDPOINT
app.get("listar-animais", async (req, res) => {
    try {
        let animais = await animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return satisfies.status(500).json(error)
    }
})

// ENDPOINT
app.post('/adicionar-animal', async (req, res) => {
    let { nome, raca, peso } = req.body

    let animal = {
        nome,
        raca,
        peso
    }

    try {
        await animal.create(animal)
        return res.status(201).json({ message: "Animal cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
})

mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})