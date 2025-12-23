import { Router } from 'express'
import { Controller } from '../../controller/get/getResaController.js'

const router = Router()

router.get('/reservations', Controller.getAllResa)
router.get('/reservations/:id', Controller.getReservationByGuestId)
router.get('/reservationsByEmail', Controller.getReservationByGuestMail)

export default router
