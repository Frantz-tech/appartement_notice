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

export const Controller = {
  createReservation
}
