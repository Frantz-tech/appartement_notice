import { sendSuccessResponse } from '../helper/responseHelper.js'
import { PicService } from '../services/picturesService.js'

const getPictures = async (req, res, next) => {
  const detail_id = req.params.id

  if (!detail_id) {
    return res.status(400).json({ message: 'detail_id introuvable' })
  }

  console.log('Detail_id de picture Controller => ', detail_id)
  try {
    const result = await PicService.getPictures(detail_id)

    sendSuccessResponse(res, 200, 'Images récupérées avec succès !', result)
  } catch (err) {
    console.error('Erreur getPictures : ', err)
    next(err)
  }
}

export const PicController = {
  getPictures
}
