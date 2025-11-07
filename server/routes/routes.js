import { Router } from 'express'
import adminRoutes from './adminRoute.js'
import guestRoutes from './guestRoute.js'

const router = Router()

router.use('/admin', adminRoutes)
router.use('/guest', guestRoutes)

export default router
