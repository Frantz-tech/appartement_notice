import pool from '../config/db.js'
import { Repository } from '../repository/createReservationRepository.js'

const checkAvailability = async (appartId, checkIn, checkOut) => {
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

export const ServiceResa = {
  checkAvailability,
  createReservation
}
