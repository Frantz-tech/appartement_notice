import { Repository } from '../../repository/get/getResaRepository.js'

const getAllResa = async () => {
  const reservation = await Repository.getAllResa()
  return reservation
}

const getReservationByGuestId = async id => {
  const reservationId = await Repository.getReservationByGuestId(id)

  return reservationId
}

const getReservationByGuestMail = async mail => {
  const reservations = await Repository.getReservationByGuestMail(mail)

  return reservations
}
export const Service = {
  getAllResa,
  getReservationByGuestId,
  getReservationByGuestMail
}
