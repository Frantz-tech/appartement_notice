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

export const Controller = {
  getAllResa
}
