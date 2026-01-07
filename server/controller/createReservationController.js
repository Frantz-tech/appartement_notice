import { sendSuccessResponse } from '../helper/responseHelper.js'
import { ServiceResa } from '../services/createReservationService.js'

const createReservation = async (req, res, next) => {
  try {
    const { guestId, appartId, checkIn, checkOut } = req.body
    console.log('BODY REÇU =>', req.body)

    const reservationId = await ServiceResa.createReservation(guestId, {
      appartId,
      checkIn,
      checkOut
    })

    sendSuccessResponse(
      res,
      201,
      'Réservation créer avec succès',
      reservationId
    )
  } catch (err) {
    next(err)
  }
}

const createResaGuestConnected = async (req, res, next) => {
  try {
    const guestId = req.guest.id
    console.log('guest id => ', guestId)

    const { appartId, checkIn, checkOut } = req.body
    console.log('Body Recu : =>', req.body)

    const newReservation = await ServiceResa.createResaGuestConnected(guestId, {
      appartId,
      checkIn,
      checkOut
    })

    sendSuccessResponse(
      res,
      201,
      `Réservation créée avec succès pour le client ${guestId} `,
      newReservation
    )
  } catch (err) {
    console.error('Erreur createReservation:', err)
    res
      .status(400)
      .json({ message: err.message || 'Erreur lors de la réservation' })
    next(err)
  }
}

export const Controller = {
  createReservation,
  createResaGuestConnected
}
