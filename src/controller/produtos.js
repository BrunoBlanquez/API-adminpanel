const produtos = require("../models/produtos")

class ProdutosController {

  static listaProdutos = (req, resp) => {
    produtos.find()
    .exec((erro, produtos) => {
      resp.status(200).json(produtos)
    })
  }

  static listarProdutoId = (req, resp) => {
    const id = req.params.id

    produtos.findById(id)
    .exec((erro, produtos) => {
      erro ? resp.status(400).send({message: `${erro.message} - ID não localizado no banco de dados`}) : resp.status(200).send({_id: produtos._id, nome: produtos.nome, imagem: produtos.imagem, estoque: produtos.estoque, preco: produtos.preco['$numberDecimal'], marca: produtos.marca})
    })
  }

  static cadastraProdutos = (req, resp) => {
    let produto = new produtos(req.body)
    produto.save((erro) => {
      erro ? resp.status(500).send({message: `${erro.message} falha no cadastro de produto`}) : resp.status(201).send(produto.toJSON())
    })
  }

  static atualizaProduto = (req, resp) => {
    const id = req.params.id

    produtos.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
      !erro ? resp.status(200).send({message: `Produto atualizado com sucesso`}) : resp.status(500).send({message: erro.message})
    })
  }

  static deletaProduto = (req, resp) => {
    const id = req.params.id
    produtos.findByIdAndDelete(id, (erro) => {
      !erro ? resp.status(200).send({message: 'Produto deletado'}) : resp.status(500).send({message: erro.message})
    })
  }
}

module.exports = ProdutosController