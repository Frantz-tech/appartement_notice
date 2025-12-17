import pool from '../config/db.js'

const createReservation = async (guestId, reservationData) => {
  console.log('>>> REPOSITORY guestId =', guestId)
  console.log('>>> REPOSITORY reservationData =', reservationData)
  const { appartId, checkIn, checkOut, status } = reservationData
  const [result] = await pool.query(
    `INSERT INTO RESERVATIONS (APPART_ID, GUEST_ID, CHECK_IN, CHECK_OUT, STATUS) VALUES (?,?,?,?,?)`,
    [appartId, guestId, checkIn, checkOut, status]
  )

  return result.insertId
}

export const Repository = {
  createReservation
}
