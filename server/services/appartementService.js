import { Repository } from '../repository/appartementRepository.js'

const createAppartement = async (dataAppart, dataDetailAppart) => {
  const appartement = await Repository.createAppartement(
    dataAppart,
    dataDetailAppart
  )
  console.log("Service | => Données de l'appartement", appartement)
  // const errors = []
  return appartement
}

const updateAppartement = async (insertId, dataAppart, dataDetailAppart) => {
  const updatedAppartement = await Repository.updateAppartement(
    insertId,
    dataAppart,
    dataDetailAppart
  )
  console.log(
    "Service | => Donnés de l'appartement a modifier : ",
    updatedAppartement
  )
  return updatedAppartement
}

export const Service = {
  createAppartement,
  updateAppartement
}
