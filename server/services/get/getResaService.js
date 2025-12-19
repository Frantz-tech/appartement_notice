import { Repository } from '../../repository/get/getResaRepository.js'

const getAllResa = async () => {
  const reservation = await Repository.getAllResa()
  return reservation
}

const getReservationById = async id => {
  const reservationId = await Repository.getReservationById(id)

  return reservationId
}
export const Service = {
  getAllResa,
  getReservationById
}
