//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
import express from 'express'
import dasRoutes from './src/routes/das.route.js'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())

app.use('/api/das', dasRoutes)

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta ${port}`)
})






