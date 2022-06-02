const express = require('express')
const db = require('./config/dbConnect')
const app = express()
app.use(express.json())

const cors = require('cors')

const rotas = require('./rotas/rotas')

const port = process.env.PORT || 3000

app.use(cors())
db.on("error", console.log.bind(console, `Erro de conexão`))
db.once("open", () => {
  console.log('Conexão com banco feita com sucesso')
})

rotas(app)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})