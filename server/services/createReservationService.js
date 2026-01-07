import pool from '../config/db.js'
import { Repository } from '../repository/createReservationRepository.js'

const checkAvailability = async (appartId, checkIn, checkOut) => {
  // Vérifie si le même guest a déjà une réservation qui se chevauche pour ce même appart
  const [rows] = await pool.query(
    `
    SELECT 1
    FROM RESERVATIONS
    WHERE APPART_ID = ?
      AND NOT (
        ? >= CHECK_OUT
        OR ? <= CHECK_IN
      )
    `,
    [appartId, checkIn, checkOut]
  )

  // Si rows.length > 0, le guest a déjà une réservation qui se chevauche
  return rows.length === 0
}

const createReservation = async (guestId, reservationData) => {
  try {
    const {
      appart_id: appartId,
      check_in: checkIn,
      check_out: checkOut
    } = reservationData

    const available = await checkAvailability(appartId, checkIn, checkOut)

    if (!available) {
      throw new Error('Ces dates sont déja réservées createResaService.')
    }

    const reservationId = await Repository.createReservation(
      guestId,
      reservationData
    )
    return reservationId
  } catch (err) {
    console.error('Erreur lors de la creation de la réservation', err)
    throw err
  }
}

const createResaGuestConnected = async (guestId, resaData) => {
  try {
    const { appartId, checkIn, checkOut } = resaData

    console.log('Check availability pour :', appartId, checkIn, checkOut)

    const available = await checkAvailability(appartId, checkIn, checkOut)

    if (!available) {
      throw new Error('Ces dates sont déjà réserver pour cet appartement')
    }

    const newReservation = await Repository.createResaGuestConnected(
      guestId,
      resaData
    )

    return newReservation
  } catch (err) {
    console.error('Erreur createResaGuestConnected', err)
    throw err
  }
}

export const ServiceResa = {
  checkAvailability,
  createReservation,
  createResaGuestConnected
}
