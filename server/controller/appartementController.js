import { sendSuccessResponse } from '../helper/responseHelper.js'
import { Service } from '../services/appartementService.js'
import { PicService } from '../services/picturesService.js'

const createAppartement = async (req, res, next) => {
  console.log('BODY:', req.body)
  console.log('FILES:', req.files)
  const dataAppart = {
    nom: req.body.nom,
    adresse: req.body.adresse,
    ville: req.body.ville,
    code_postal: req.body.code_postal,
    type: req.body.type
  }

  const dataDetailAppart = {
    superficie: req.body.superficie,
    chambres: req.body.chambres,
    sdb: req.body.sdb,
    cuisine: req.body.cuisine === 'true' ? 1 : 0,
    meubles: req.body.meubles === 'true' ? 1 : 0,
    balcon: req.body.balcon === 'true' ? 1 : 0,
    ascenseur: req.body.ascenseur === 'true' ? 1 : 0,
    description: req.body.description
  }

  try {
    const [appartId, detailId] = await Service.createAppartement(
      dataAppart,
      dataDetailAppart
    )
    if (req.files && req.files.length > 0) {
      const urls = req.files.map(file => `/uploads/${file.filename}`)
      await PicService.createPictures(detailId, urls)
    }

    sendSuccessResponse(res, 201, 'Appartement créer avec succès', [
      appartId,
      detailId
    ])
  } catch (err) {
    next(err)
  }
}

const updateAppartement = async (req, res, next) => {
  const appartId = req.params.id

  const dataAppart = {
    nom: req.body.nom,
    adresse: req.body.adresse,
    ville: req.body.ville,
    code_postal: req.body.code_postal,
    type: req.body.type
  }

  const dataDetailAppart = {
    superficie: req.body.superficie,
    chambres: req.body.chambres,
    sdb: req.body.sdb,
    cuisine: req.body.cuisine,
    meubles: req.body.meubles,
    balcon: req.body.balcon,
    ascenseur: req.body.ascenseur,
    description: req.body.description
  }

  try {
    const result = await Service.updateAppartement(
      appartId,
      dataAppart,
      dataDetailAppart
    )

    sendSuccessResponse(
      res,
      200,
      `Appartement ${result} modifié avec succès`,
      result
    )
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  createAppartement,
  updateAppartement
}
