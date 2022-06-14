const express = require('express')
const TransacoesController = require('../controller/transacoes')
const router = express.Router()

router
  .get("/transactions", TransacoesController.listaTransacoes)
  .post("/transactions", TransacoesController.gravaTransacoes)

module.exports = router