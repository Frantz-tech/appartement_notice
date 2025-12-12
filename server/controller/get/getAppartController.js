import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getAppartService.js'

const getAllApparts = async (req, res, next) => {
  try {
    const apparts = await Service.getAllApparts()
    console.log('Appartemps = ', apparts)

    sendSuccessResponse(res, 200, 'Appartements récupérés avec succès', apparts)
  } catch (err) {
    next(err)
  }
}

const getAppartById = async (req, res, next) => {
  const appartement = req.params.id
  try {
    const appartID = await Service.getAppartById(appartement)
    console.log('Appart Id est = ', appartID)

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
