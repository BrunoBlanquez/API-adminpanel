const express = require('express')
const ProductsController = require('../controller/produtos')
const router = express.Router()

router
  .get("/products", ProductsController.listaProdutos)
  .get("/products/:id", ProductsController.listarProdutoId)
  .post("/products", ProductsController.cadastraProdutos)
  .put("/products/:id", ProductsController.atualizaProduto)
  .delete("/products/:id", ProductsController.deletaProduto)

  module.exports = router