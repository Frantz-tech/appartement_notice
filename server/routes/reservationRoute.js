import { Router } from 'express'
import { Controller } from '../controller/createReservationController.js'
import { authGuest } from '../middleware/authGuest.js'

const router = Router()

router.post('/reservation', Controller.createReservation)
router.post('/reservation/me', authGuest, Controller.createResaGuestConnected)

export default router
