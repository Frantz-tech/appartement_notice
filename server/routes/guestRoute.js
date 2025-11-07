import { Router } from 'express'
import { Controller } from '../controller/guestController.js'

const router = Router()

// Route pour la connexion

router.post('/login', Controller.guestLogin)

// Route privée
// router.get('/dashboard', verifyAdmin, (req, res) => {
//   sendSuccessResponse(res, 200, " Bienvenue dans l'espace admin sécurisé ", {
//     user: req.user
//   })
// })

export default router
