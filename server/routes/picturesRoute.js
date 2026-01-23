import { Router } from 'express'
import { PicController } from '../controller/picturesController.js'

const router = Router()

router.get('/pictures/:id', PicController.getPictures)

export default router
