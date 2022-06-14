const mongoose = require("mongoose")

const TransacoesSchema = new mongoose.Schema(
  {
    id: { type: String },
    data: { type: Date },
    produto: { type: mongoose.SchemaTypes.ObjectId, ref: 'produtos' },
    comprador: { type: mongoose.SchemaTypes.ObjectId, ref: 'usuarios' },
    status: { type: String }
  },
   {versionKey: 'Versão' }
)

const transacoes = mongoose.model('transacoes', TransacoesSchema)

module.exports = transacoes