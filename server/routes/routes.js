import { Router } from 'express'
import adminRoutes from './adminRoute.js'

const router = Router()

router.use('/admin', adminRoutes)

export default router
