import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/update/updateResaService.js'

const updateStatusResa = async (req, res, next) => {
  const { id } = req.params
  const { status } = req.body
  console.log('Id de la RESA : ', id)
  console.log('STATUT de la RESA => ', status)

  try {
    const result = await Service.updateStatusResa(status, id)

    sendSuccessResponse(res, 200, `Reservatino modifié avec succès`, result)
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  updateStatusResa
}
