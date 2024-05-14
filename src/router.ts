import { Router } from 'express'

import { createTaskController, editTaskController, getTaskController } from './controller'

const router = Router()

router.get('/', getTaskController)
router.put('/:id', editTaskController)
router.post('/', createTaskController)

export default router