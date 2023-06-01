const mongoose = require('mongoose')

const lancheSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    fabricante: { type: String, required: true }, 
    emEstoque: { type: Boolean, required: true },
    publicadoEm: { type: Date, required: true },
})

const lanche = mongoose.model('Lanches', lancheSchema)

module.exports = lanche