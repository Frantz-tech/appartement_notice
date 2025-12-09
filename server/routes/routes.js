import { Router } from 'express'
import adminRoutes from './adminRoute.js'
import appartementRoutes from './appartementRoute.js'
import guestRoutes from './guestRoute.js'
const router = Router()

router.use('/admin', adminRoutes)
router.use('/guest', guestRoutes)
router.use('/appartement', appartementRoutes)
export default router
