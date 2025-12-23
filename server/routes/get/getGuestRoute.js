import { Router } from 'express'
import { Controller } from '../../controller/get/getGuestController.js'

const router = Router()

router.get('/guest', Controller.getAllGuest)
router.get('/guest/:id', Controller.getGuestById)
router.post('/alreadyGuest', Controller.connectGuestWithMail)

export default router
