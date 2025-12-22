import { Repository } from '../../repository/get/getResaRepository.js'

const getAllResa = async () => {
  const reservation = await Repository.getAllResa()
  return reservation
}

const getReservationByGuestId = async id => {
  const reservationId = await Repository.getReservationByGuestId(id)

  return reservationId
}
export const Service = {
  getAllResa,
  getReservationByGuestId
}
