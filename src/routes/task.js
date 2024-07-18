import { Router } from 'express';
import { createNewTask, deletingTask, editingTask, getAll } from '../controllers/task.js'

const router = Router()

router.get('/', getAll)
router.post('/', createNewTask)
router.put('/', editingTask)
router.delete('/', deletingTask)
export default router