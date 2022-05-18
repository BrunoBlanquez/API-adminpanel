const mongoose = require("mongoose")

const UsuariosSchema = new mongoose.Schema(
  {
    id: { type: String },
    usuario: { type: String, required: true },
    nome_completo: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: Number, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: false }
  },
   {versionKey: 'Versão' }
)

// Estou definindo o nome do meu banco e o esquema que eles vão seguir

const usuarios = mongoose.model('usuarios', UsuariosSchema)

module.exports = usuarios