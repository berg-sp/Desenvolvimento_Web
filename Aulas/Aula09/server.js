const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connection = "mongodb+srv://AddDB:2023-MongoDB@adddb.nhwd1cu.mongodb.net/?retryWrites=true&w=majority"


app.get('/', (req, res) => {
    return res.status(200).json("Deu certo")
})

mongoose.connect(connection, {
    dbname: 'ProdutosDB'
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {    
    console.log(error)
})