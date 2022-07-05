const mongoose = require("mongoose")

const TransacoesSchema = new mongoose.Schema(
  {
    id: { type: String },
    data: { type: Date, default: Date.now, required: true },
    produto: { type: mongoose.SchemaTypes.ObjectId, ref: 'produtos', required: true },
    comprador: { type: mongoose.SchemaTypes.ObjectId, ref: 'usuarios', required: true },
    preco: { type: mongoose.Decimal128, required: true },
    status: { type: String, required: true }
  },
   {versionKey: 'Versão' }
)

const transacoes = mongoose.model('transacoes', TransacoesSchema)

module.exports = transacoes