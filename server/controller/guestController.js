import jwt from 'jsonwebtoken'
import { sendSuccessResponse } from '../helper/responseHelper.js'
import { Service } from '../services/guestService.js'

const guestLogin = async (req, res) => {
  const { password } = req.body
  console.log('Mot de passe envoyé par le front :', password)

  try {
    const guest = await Service.guestPassword(password)
    console.log('Guest retourné par le service :', guest)

    if (guest) {
      console.log('Mot de passe hashé en BDD :', guest.PASSWORD)
    }

    if (!guest || (guest.errors && guest.errors.length > 0)) {
      return res.status(401).json({ message: 'Mot de passe incorrect ❌' })
    }

    const token = jwt.sign({ id: guest.id }, process.env.JWT_SECRET, {
      expiresIn: '3h'
    })
    sendSuccessResponse(res, 200, 'Connexion réussie', { user: guest, token })
  } catch (error) {
    console.error('Erreur guestLogin:', error)
    res.status(500).json({ message: 'Erreur serveur', error: error.message })
  }
}

export const Controller = {
  guestLogin
}
