import { bodyParser, urlEnconder } from './middlwares'
import express from 'express'
import router from './router'
import * as dotenv from 'dotenv'
dotenv.config()

export const api = express()

api.use(bodyParser)
api.use(urlEnconder)
api.use('/api', router)
