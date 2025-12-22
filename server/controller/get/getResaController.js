import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getResaService.js'

const getAllResa = async (req, res, next) => {
  try {
    const resa = await Service.getAllResa()

    sendSuccessResponse(
      res,
      200,
      'Liste des réservations récupérés avec succès',
      resa
    )
  } catch (err) {
    console.error(' getAllResa debug ', err)
    next(err)
  }
}

const getReservationByGuestId = async (req, res, next) => {
  try {
    const { id } = req.params
    const reservationId = await Service.getReservationByGuestId(id)

    if (!reservationId) {
      return sendSuccessResponse(
        res,
        200,
        `Aucune réservation trouvé pour l'utilisateur avec l'id ${id}`,
        []
      )
    }
    const guestName = reservationId?.[0]?.GUEST_LASTNAME ?? ' cet utilisateur '

    sendSuccessResponse(
      res,
      200,
      `Réservations de ${guestName} avec l'id ${id} récupérés avec succès`,
      reservationId
    )
  } catch (err) {
    console.error(' getReservationById debug : ', err)
    next(err)
  }
}

export const Controller = {
  getAllResa,
  getReservationByGuestId
}
