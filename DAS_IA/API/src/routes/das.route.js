import express from 'express'
import {perguntarDas} from '../controllers/das.controller.js'

const router = express.Router()

router.post('/perguntar', perguntarDas)

export default router

