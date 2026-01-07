import { Router } from 'express'
import adminRoutes from './adminRoute.js'
import appartementRoutes from './appartementRoute.js'
import getAllAppartements from './get/getAppartementRoute.js'
import getGuestRoutes from './get/getGuestRoute.js'
import getAllResa from './get/getResaRoute.js'
import getAllRules from './get/getRulesRoute.js'
import guestRoutes from './guestRoute.js'
import createReservation from './reservationRoute.js'

const router = Router()

router.use('/admin', adminRoutes)
router.use('/guest', guestRoutes)
router.use('/admin', appartementRoutes)
router.use('/admin', getAllAppartements)
router.use('/admin', getAllRules)
router.use('/admin', getGuestRoutes)
router.use('/login', getGuestRoutes)
router.use('/admin', getAllResa)
router.use('/guest', getAllResa)
router.use('/admin', createReservation)
router.use('/guest', createReservation)

export default router
