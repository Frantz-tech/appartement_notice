import { Router } from 'express'
import { Controller } from '../../controller/get/getResaController.js'

const router = Router()

router.get('/reservations', Controller.getAllResa)
// router.get('/reservation/:id', Controller.getResaById) a faire
export default router
