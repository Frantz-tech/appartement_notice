import { Repository } from '../../repository/update/updateResaRepository.js'

const updateStatusResa = async (status, reservationId) => {
  const updatedResa = Repository.updateStatusResa(status, reservationId)

  return updatedResa
}

export const Service = {
  updateStatusResa
}
