import { Router } from 'express'
import { Controller } from '../../controller/get/getAppartController.js'

const router = Router()

router.get('/appartement', Controller.getAllApparts)

export default router
