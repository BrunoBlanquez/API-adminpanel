const mongoose = require("mongoose")

const ProdutosSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    imagem: { type: String, required: true },
    estoque: { type: Number, required: true },
    preco: { type: String, required: true },
    marca: { type: String, required: false }
  },
   {versionKey: 'Versão' }
)

// Estou definindo o nome do meu banco e o esquema que eles vão seguir

const produtos = mongoose.model('produtos', ProdutosSchema)

module.exports = produtos