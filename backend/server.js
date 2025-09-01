import express from 'express'
import 'dotenv/config';
import aiRouter from './src/routes/ai.routes.js';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.use('/ai', aiRouter)

