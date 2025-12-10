import { Service } from '../services/appartementService.js'

const createAppartement = async (req, res) => {
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
    const [appartId, detailId] = await Service.createAppartement(
      dataAppart,
      dataDetailAppart
    )
    // Mettre a la place send succes response
    res
      .status(200)
      .json({ message: 'Appartement créé', ids: [appartId, detailId] })
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  createAppartement
}
