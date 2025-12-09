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

export const Service = {
  createAppartement
}
