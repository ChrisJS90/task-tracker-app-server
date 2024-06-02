import { Router } from 'express';
import { getAll } from '../controllers/task.js'

const router = Router()

router.get('/', getAll)

export default router