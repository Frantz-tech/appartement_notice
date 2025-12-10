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

export const Controller = {
  getAllApparts
}
