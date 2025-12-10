import { Repository } from '../../repository/get/getAppartRepository.js'

const getAllApparts = async () => {
  const apparts = await Repository.getAllApparts()
  // const errors = []
  return apparts
}

export const Service = {
  getAllApparts
}
