import { Router } from 'express'
import { Controller } from '../controller/createReservationController.js'

const router = Router()

router.post('/reservation', Controller.createReservation)

export default router
