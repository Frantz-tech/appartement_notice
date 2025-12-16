import { Router } from 'express'
import adminRoutes from './adminRoute.js'
import appartementRoutes from './appartementRoute.js'
import getAllAppartements from './get/getAppartementRoute.js'
import getAllRules from './get/getRulesRoute.js'
import guestRoutes from './guestRoute.js'
const router = Router()

router.use('/admin', adminRoutes)
router.use('/guest', guestRoutes)
router.use('/admin', appartementRoutes)
router.use('/admin', getAllAppartements)
router.use('/admin', getAllRules)

export default router
