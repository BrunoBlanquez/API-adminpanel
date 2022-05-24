const mongoose = require("mongoose")

const ProdutosSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String },
    imagem: { type: String },
    estoque: { type: Number },
    preco: { type: String },
    marca: { type: String }
  },
   {versionKey: 'Versão' }
)

// Estou definindo o nome do meu banco e o esquema que eles vão seguir

const produtos = mongoose.model('produtos', ProdutosSchema)

module.exports = produtos