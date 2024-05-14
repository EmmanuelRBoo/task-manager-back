import express from 'express'
import cors from 'cors'

import { PORT } from './constants'
import router from './router'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/task', router)

app.listen(PORT)