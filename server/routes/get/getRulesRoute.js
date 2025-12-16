import { Router } from 'express'
import { Controller } from '../../controller/get/getRulesController.js'

const router = Router()

router.get('/rules', Controller.getAllRules)
// router.get('/appartement_detail/:id', Controller.getAppartById)

export default router
