import express from 'express'
import 'dotenv/config';
import aiRouter from './src/routes/ai.routes.js';
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url';

const app = express()
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(cors())

app.use(express.json())





app.use('/ai', aiRouter)

if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(__dirname, "../frontend/dist");

  app.use(express.static(distPath));

  app.get(/^\/(?!api).*/, (req, res) => {

    res.sendFile(path.join(distPath, "index.html"));
  });
}