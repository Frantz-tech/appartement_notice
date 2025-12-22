import bcrypt from 'bcrypt'
import { Repository } from '../repository/guestRepository.js'
import { ServiceResa } from './createReservationService.js'

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

const createGuestWithReservation = async (guestData, reservationData) => {
  const { appart_id, check_in, check_out } = reservationData

  const available = await ServiceResa.checkAvailability(
    appart_id,
    check_in,
    check_out
  )
  if (!available) {
    throw new Error('Ces dates sont déjà réservées guestService.')
  }

  // Ensuite créer le guest + réservation
  return await Repository.createGuestWithReservation(guestData, reservationData)
}

export const Service = {
  guestPassword,
  createGuestWithReservation
}
