import { Router } from 'express'
import { Controller } from '../../controller/get/getAppartController.js'

const router = Router()

router.get('/appartement', Controller.getAllApparts)
router.get('/appartement_detail/:id', Controller.getAppartById)

export default router
