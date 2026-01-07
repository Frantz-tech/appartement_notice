import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getAppartService.js'

const getAllApparts = async (req, res, next) => {
  try {
    const apparts = await Service.getAllApparts()

    sendSuccessResponse(res, 200, 'Appartements récupérés avec succès', apparts)
  } catch (err) {
    next(err)
  }
}

const getAppartById = async (req, res, next) => {
  const appartement = req.params.id
  try {
    const appartID = await Service.getAppartById(appartement)

    sendSuccessResponse(
      res,
      200,
      `Appartement avec l'id : ${appartement} récupéré avec succès `,
      appartID
    )
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  getAllApparts,
  getAppartById
}
