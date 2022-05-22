const mongoose = require("mongoose")

const UsuariosSchema = new mongoose.Schema(
  {
    id: { type: String },
    usuario: { type: String },
    nome_completo: { type: String },
    aniversario: { type: String },
    avatar: { type: String },
    email: { type: String },
    senha: { type: String },
    telefone: { type: String },
    endereco: { type: String }
  },
   {versionKey: 'Versão' }
)

// Estou definindo o nome do meu banco e o esquema que eles vão seguir

const usuarios = mongoose.model('usuarios', UsuariosSchema)

module.exports = usuarios