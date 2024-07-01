import { Router } from 'express';
import { createNewTask, getAll } from '../controllers/task.js'

const router = Router()

router.get('/', getAll)
router.post('/', createNewTask)

export default router