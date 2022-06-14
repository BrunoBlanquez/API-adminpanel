const mongoose = require("mongoose")

const TransacoesSchema = new mongoose.Schema(
  {
    id: { type: String },
    data: { type: Date, required: true },
    produto: { type: mongoose.SchemaTypes.ObjectId, ref: 'produtos', required: true },
    comprador: { type: mongoose.SchemaTypes.ObjectId, ref: 'usuarios', required: true },
    status: { type: String }
  },
   {versionKey: 'Versão' }
)

const transacoes = mongoose.model('transacoes', TransacoesSchema)

module.exports = transacoes