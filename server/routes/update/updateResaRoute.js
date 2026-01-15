import { Router } from 'express'
import { Controller } from '../../controller/update/updateResaController.js'

const router = Router()

router.patch('/reservations/:id/status', Controller.updateStatusResa)
// router.get('/appartement_detail/:id', Controller.getAppartById)

export default router
