import { Repository } from '../../repository/get/getGuestRepository.js'
import { validateEmail } from '../../utils/validate.js'

const getAllGuest = async () => {
  const guests = Repository.getAllGuest()

  return guests
}

const getGuestById = async id => {
  const guestId = Repository.getGuestById(id)

  return guestId
}

const connectGuestWithMail = async email => {
  try {
    if (!email) {
      throw new Error('Email requis Service connectGuestWithMail')
    }

    if (!validateEmail(email)) {
      throw new Error('Email invalide')
    }

    const guest = await Repository.connectGuestWithMail(email)

    if (!guest) {
      throw new Error('Guest introuvable')
    }
    return guest
  } catch (error) {
    throw error
  }
}
export const Service = {
  getAllGuest,
  getGuestById,
  connectGuestWithMail
}
