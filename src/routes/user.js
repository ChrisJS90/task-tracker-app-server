import { Router } from 'express';
import { getAll, getUserByEmail } from '../controllers/user.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getUserByEmail)


export default router