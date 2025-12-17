import { Repository } from '../../repository/get/getResaRepository.js'

const getAllResa = async () => {
  const reservation = await Repository.getAllResa()
  return reservation
}

export const Service = {
  getAllResa
}
