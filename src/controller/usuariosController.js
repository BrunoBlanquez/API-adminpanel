const usuarios = require("../models/usuarios-model")

class UsuariosController {
  static listaUsuarios = (req, resp) => {
    usuarios.find()
    .exec((erro, usuarios) => {
      resp.status(200).json(usuarios)
    })
  }

  static listaUsuariosID = (req, resp) => {
    const id = req.params.id 

    usuarios.findById(id)
    .exec((erro, usuarios) => {
      erro ? resp.status(400).send({message: `${erro.message} - ID não localizado no banco de dados`}) : resp.status(200).send(usuarios) 
    })
  }

  static cadastraUsuarios = (req, resp) => {
    let usuario = new usuarios(req.body)
    usuario.save((erro) => {
      erro ? resp.status(500).send({message: `${erro.message} falha ao cadastrar novo usuário`}) : resp.status(201).send(usuario.toJSON())
    })
  }



  static atualizaUsuario = (req, resp) => {
    const id = req.params.id

    usuarios.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
      !erro ? resp.status(200).send({message: `Usuário atualizado com sucesso`}) : resp.status(500).send({message: erro.message})
    })
  }

  static deletaUsuario = (req, resp) => {
    const id = req.params.id 
    usuarios.findByIdAndDelete(id, (erro) => {
      !erro ? resp.status(200).send({message: `Usuário deletado com sucesso`}) : resp.status(500).send({message: erro.message})
    })
  }
}

module.exports = UsuariosController