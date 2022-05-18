const mongoose = require("mongoose")

const UsuariosSchema = new mongoose.Schema(
  {
    id: { type: String },
    usuario: { type: String, required: true },
    nome_completo: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    telefone: { type: String },
    endereco: { type: String }
  },
   {versionKey: 'Versão' }
)

// Estou definindo o nome do meu banco e o esquema que eles vão seguir

const usuarios = mongoose.model('usuarios', UsuariosSchema)

module.exports = usuarios