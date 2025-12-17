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

const createGuest = async (req, res, next) => {
  console.log('BODY RECU:', req.body)
  try {
    const guestData = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      number: req.body.number
    }
    console.log('debug guestData', guestData)

    const reservationData = {
      appart_id: req.body.appart_id,
      check_in: req.body.checkIn,
      check_out: req.body.checkOut,
      status: req.body.status || 'EN_ATTENTE'
    }
    console.log('debug reservationData ', reservationData)

    await Service.createGuest(guestData, reservationData)

    sendSuccessResponse(res, 201, '✅ Client et réservation crée avec succès', {
      'données du client': guestData,
      'données de la reservation ': reservationData
    })
  } catch (err) {
    console.error('Erreur createGuest :', err)
    next(err)
  }
}

export const Controller = {
  guestLogin,
  createGuest
}
