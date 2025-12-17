import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getGuestService.js'

const getAllGuest = async (req, res, next) => {
  try {
    const guests = await Service.getAllGuest()

    console.log('Liste des guests = ', guests)

    sendSuccessResponse(res, 200, 'Guests récupérés avec succès', guests)
  } catch (err) {
    next(err)
  }
}

const getGuestById = async (req, res, next) => {
  const guest = req.params.id
  try {
    const guestId = await Service.getGuestById(guest)
    console.log('Détal du guest : ', guestId)

    sendSuccessResponse(
      res,
      200,
      `Guest avec l'id : ${guest} récupéré avec succès`,
      guestId
    )
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  getAllGuest,
  getGuestById
}
