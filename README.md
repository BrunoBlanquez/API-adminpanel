# API do Painel Administrativo

## Sobre o Projeto

Esta API foi desenvolvida para o projeto do Painel Administrativo, também presente neste repositório. A proposta foi a simulação de uma loja, que possui uma lista de usuários e de produtos

## Tecnologias usadas:
NodeJS com express
MongoDB para o banco de dados

## Como executar:
A conexão com o banco de dados é feita pelo arquivo dbConnect.js, que está indisponível para evitar exposição de senha e usuário. Para realizar a conexão, é necessário criar um arquivo JavaScript com a estrutura abaixo:

```
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://NomeUsuario:SenhaUsuario@cluster0.fqazb.mongodb.net/NomeBancoDeDados');

let db = mongoose.connection
module.exports = db
```

Esse link contido no mongoose.connect é fornecido pelo próprio banco de dados, e deve ter suas informações _alteradas_ conforme cada usuário, alterando seu nome de usuário, senha e o nome do banco onde serão feitas as requisições de dados.
