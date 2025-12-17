import { Repository } from '../../repository/get/getGuestRepository.js'

const getAllGuest = async () => {
  const guests = Repository.getAllGuest()

  return guests
}

const getGuestById = async id => {
  const guestId = Repository.getGuestById(id)

  return guestId
}
export const Service = {
  getAllGuest,
  getGuestById
}
