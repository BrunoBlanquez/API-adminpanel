const express = require('express')
const UsersController = require("../controller/usuarios")
const router = express.Router()

router  
.get("/users", UsersController.listaUsuarios)
.get("/users/:id", UsersController.listaUsuariosID)
.get("/lastusers", UsersController.listaUltimosCinco)
.post("/users", UsersController.cadastraUsuarios)
.put("/users/:id", UsersController.atualizaUsuario)
.delete("/users/:id", UsersController.deletaUsuario)

module.exports = router