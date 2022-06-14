const express = require('express')
const TransacoesController = require('../controller/transacoes')
const router = express.Router()

router
  .get("/transacoes", TransacoesController.listaTransacoes)
  .post("/transacoes", TransacoesController.gravaTransacoes)

module.exports = router