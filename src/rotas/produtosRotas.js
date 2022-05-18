const express = require('express')
const ProdutosController = require('../controller/ProdutosController')
// Chamando router do express
const router = express.Router()

router
  .get("/products", ProdutosController.listaProdutos)
  .get("/products/:id", ProdutosController.listarProdutoId)
  .post("/newproduct", ProdutosController.cadastraProdutos)
  .put("/products/:id", ProdutosController.atualizaProduto)
  .delete("/products/:id", ProdutosController.deletaProduto)

  module.exports = router