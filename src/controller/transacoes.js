const transacoes = require("../models/Transacoes")

class TransacoesController {

  static listaTransacoes = (req, resp) => {
    transacoes.find()
      .exec((erro, transacoes) => {
        resp.status(200).json(transacoes)
      })
  }

  static gravaTransacoes = (req, resp) => {
    let transacao = new transacoes(req.body)
    transacao.save((erro) => {
      erro ? resp.status(500).send({message: `${erro.message} falha ao cadastrar transação`}) : resp.status(201).send(transacao.toJSON())
    })
  }

}

module.exports = TransacoesController