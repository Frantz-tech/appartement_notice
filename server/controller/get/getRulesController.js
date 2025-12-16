import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getRulesService.js'

const getAllRules = async (req, res, next) => {
  try {
    const rules = await Service.getAllRules()
    console.log('Appartemps = ', rules)

    sendSuccessResponse(res, 200, 'Règles récupérés avec succès', rules)
  } catch (err) {
    next(err)
  }
}

// const getAppartById = async (req, res, next) => {
//   const appartement = req.params.id
//   try {
//     const appartID = await Service.getAppartById(appartement)
//     console.log('Détail de l appartement :  ', appartID)

//     sendSuccessResponse(
//       res,
//       200,
//       `Appartement avec l'id : ${appartement} récupéré avec succès `,
//       appartID
//     )
//   } catch (err) {
//     next(err)
//   }
// }

export const Controller = {
  getAllRules
  // getAppartById
}
