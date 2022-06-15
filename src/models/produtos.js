const mongoose = require("mongoose")

const ProdutosSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String },
    imagem: { type: String },
    estoque: { type: Number },
    preco: { type: NumberDecimal },
    marca: { type: String }
  },
   {versionKey: 'Versão' },
)

const produtos = mongoose.model('produtos', ProdutosSchema)

module.exports = produtos