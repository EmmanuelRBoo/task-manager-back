import { Router } from 'express'

export const router = Router()

router.get('/task')
router.put('/task/:id')
router.post('/task')