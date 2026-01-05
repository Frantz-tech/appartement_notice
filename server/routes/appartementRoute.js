import { Router } from 'express'
import { Controller } from '../controller/appartementController.js'

const router = Router()

router.post('/appartement', Controller.createAppartement)
router.patch('/appartement/:id', Controller.updateAppartement)

export default router
