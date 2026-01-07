import pool from '../config/db.js'

const getLatestGuest = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM `GUEST` ORDER BY id DESC LIMIT 1'
  )
  return rows[0]
}

const createGuestWithReservation = async (guestData, reservationData) => {
  const { name, lastName, email, number } = guestData

  const [result] = await pool.query(
    // Insert guest data
    'INSERT INTO GUEST_INFO (NAME, LASTNAME, EMAIL, NUMBER) VALUE (?, ?, ?, ?)',
    [name, lastName, email, number]
  )

  const guestId = result.insertId

  // Insert in reservation table
  const { appart_id, check_in, check_out, status } = reservationData
  const [reservationResult] = await pool.query(
    'INSERT INTO RESERVATIONS (APPART_ID, GUEST_ID, CHECK_IN, CHECK_OUT, STATUS) VALUE (?,?,?,?,?)',
    [appart_id, guestId, check_in, check_out, status]
  )

  return [guestId, reservationResult.insertId]
}

export const Repository = {
  getLatestGuest,
  createGuestWithReservation
}
