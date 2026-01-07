import pool from '../config/db.js'

const createReservation = async (guestId, reservationData) => {
  console.log('>>> REPOSITORY guestId =', guestId)
  console.log('>>> REPOSITORY reservationData =', reservationData)
  const { appartId, checkIn, checkOut } = reservationData
  const [result] = await pool.query(
    `INSERT INTO RESERVATIONS (APPART_ID, GUEST_ID, CHECK_IN, CHECK_OUT) VALUES (?,?,?,?)`,
    [appartId, guestId, checkIn, checkOut]
  )

  return result.insertId
}

const createResaGuestConnected = async (guestId, resaData) => {
  console.log('>> REPO || createResaGuestConnected : ', resaData)

  const { appartId, checkIn, checkOut } = resaData

  const result = await pool.query(
    `INSERT INTO RESERVATIONS (APPART_ID, GUEST_ID, CHECK_IN, CHECK_OUT) VALUES (?,?,?,?)`,
    [appartId, guestId, checkIn, checkOut]
  )
  return result.insertId
}

export const Repository = {
  createReservation,
  createResaGuestConnected
}
