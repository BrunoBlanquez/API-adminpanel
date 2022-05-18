const express = require('express')
const UsuariosController = require("../controller/usuariosController")
const router = express.Router()

router  
.get("/usuarios", UsuariosController.listaUsuarios)
.get("/usuarios/:id", UsuariosController.listaUsuariosID)
.post("/newuser", UsuariosController.cadastraUsuarios)
.put("/usuarios/:id", UsuariosController.atualizaUsuario)
.delete("/usuarios/:id", UsuariosController.deletaUsuario)

module.exports = router