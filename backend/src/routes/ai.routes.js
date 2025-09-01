import express from 'express'
import { generateCon } from '../controllers/ai.controller.js'

const aiRouter = express.Router()

aiRouter.post("/get-review", generateCon)

export default aiRouter 