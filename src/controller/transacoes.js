const transacoes = require("../models/Transacoes")

class TransacoesController {

  static listaTransacoes = (req, resp) => {
    transacoes.find()
      .populate('produto', ['nome', 'imagem', 'preco'])
      .populate('comprador', ['nome_completo', 'usuario', 'avatar'])
      .exec((erro, transacoes) => {
        erro ? resp.status(400).send({message: `${erro.message} - FALHA NA BUSCA`}) : resp.status(200).json(transacoes)
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