const express = require('express')
const produtos = require("./produtosRotas")
const usuarios = require("./usuariosRotas")

const routes = (app) => {
  app.route("./").get((req, resp) => {
    resp.status(200).send({Titulo: 'Página Inicial'})
  })

  app.use(
  express.json(),
  produtos,
  usuarios
)
}


module.exports = routes