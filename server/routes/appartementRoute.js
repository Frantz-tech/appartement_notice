import { Router } from 'express'
import { Controller } from '../controller/appartementController.js'
import upload from '../middleware/uploads.js'

const router = Router()

router.post(
  '/appartement',
  upload.array('pictures', 10),
  Controller.createAppartement
)
router.patch('/appartement/:id', Controller.updateAppartement)

export default router
