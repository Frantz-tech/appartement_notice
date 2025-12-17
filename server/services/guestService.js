import bcrypt from 'bcrypt'
import { Repository } from '../repository/guestRepository.js'

const guestPassword = async plainPassword => {
  const guest = await Repository.getLatestGuest()
  console.log(' Service | => User id : ', guest)

  const errors = []

  if (!guest) {
    return { errors: ['Guest non trouvé'] }
  }

  const isPasswordValid = await bcrypt.compare(plainPassword, guest.PASSWORD)

  if (!isPasswordValid) {
    console.log(' Wrong password ❌')
    errors.push(' Wrong password ❌')

    return { errors }
  }
  return guest
}

const createGuest = async (guestData, reservationData) => {
  return await Repository.createGuest(guestData, reservationData)
}

export const Service = {
  guestPassword,
  createGuest
}
