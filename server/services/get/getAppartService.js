import { Repository } from '../../repository/get/getAppartRepository.js'

const getAllApparts = async () => {
  const apparts = await Repository.getAllApparts()
  // const errors = []
  return apparts
}

const getAppartById = async id => {
  const appartement = await Repository.getAppartById(id)
  // const errors = []
  return appartement
}

export const Service = {
  getAllApparts,
  getAppartById
}
