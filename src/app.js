// Chamando express
const express = require('express')
// Importando banco de dados
const db = require('./config/dbConnect')
// Criando app e usando express
const app = express()
app.use(express.json())
// CORS
const cors = require('cors')
// Puxando Rotas
const rotas = require('./rotas/rotas')

const port = process.env.PORT || 3000

// Usando CORS
app.use(cors())

// Crio a conexão com o banco de dados
  // Mostra a mensagem em caso de erro
db.on("error", console.log.bind(console, `Erro de conexão`))
  // Abre conexão com o banco
db.once("open", () => {
  console.log('Conexão com banco feita com sucesso')
})

// usando rotas passando app como parâmetro
rotas(app)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})