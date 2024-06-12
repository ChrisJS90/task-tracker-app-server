import { Router } from 'express';
import { getAll, login, newUser } from '../controllers/user.js'

const router = Router()

router.get('/', getAll)
router.post('/login', login)
router.post('/newUser', newUser)


export default router