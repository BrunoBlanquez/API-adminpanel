const produtos = require("../models/produtos-model")

class ProdutosController {

  static listaProdutos = (req, resp) => {
    // .find é um método que busca os produtos
    produtos.find()
    .exec((erro, produtos) => {
      resp.status(200).json(produtos)
    })
  }

  static listarProdutoId = (req, resp) => {
    // Ver como vou pegar o ID do produto
    const id = req.params.id

    produtos.findById(id)
    .exec((erro, produtos) => {
      erro ? resp.status(400).send({message: `${erro.message} - ID não localizado no banco de dados`}) : resp.status(200).send(produtos)
    })
  }

  static cadastraProdutos = (req, resp) => {
    let produto = new produtos(req.body)
    produto.save((erro) => {
      erro ? resp.status(500).send({message: `${erro.message} falha no cadastro de produto`}) : resp.status(201).send(produto.toJSON())
    })
  }

  static atualizaProduto = (req, resp) => {
    // ver como pega o ID e os campos no frontend
    const id = req.params.id

    produtos.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
      !erro ? resp.status(200).send({message: `Produto atualizado com sucesso`}) : resp.status(500).send({message: erro.message})
    })
  }

  static deletaProduto = (req, resp) => {
    // ver como pega o ID para deletar
    const id = req.params.id
    produtos.findByIdAndDelete(id, (erro) => {
      !erro ? resp.status(200).send({message: 'Produto deletado'}) : resp.status(500).send({message: erro.message})
    })
  }
}

module.exports = ProdutosController