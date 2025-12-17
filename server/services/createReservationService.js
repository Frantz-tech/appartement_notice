import pool from '../config/db.js'
import { Repository } from '../repository/createReservationRepository.js'

const checkAvailability = async (appartId, checkIn, checkOut) => {
  const [rows] = await pool.query(
    `SELECT * FROM RESERVATIONS
     WHERE APPART_ID = ?
       AND (
             (? BETWEEN CHECK_IN AND CHECK_OUT)
          OR (? BETWEEN CHECK_IN AND CHECK_OUT)
          OR (CHECK_IN BETWEEN ? AND ?)
          OR (CHECK_OUT BETWEEN ? AND ?)
       )`,
    [appartId, checkIn, checkOut, checkIn, checkOut, checkIn, checkOut]
  )
  return rows.length === 0 // true = disponible, false = bloqué
}
const createReservation = async (guestId, reservationData) => {
  try {
    const { appartId, checkIn, checkOut } = reservationData
    const available = await checkAvailability(appartId, checkIn, checkOut)

    if (!available) {
      throw new Error('Ces dates sont déja réservées.')
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

export const Service = {
  checkAvailability,
  createReservation
}
