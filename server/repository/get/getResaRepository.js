import pool from '../../config/db.js'

const getAllResa = async () => {
  const [rows] = await pool.query(`SELECT
  g.GUEST_ID,
  g.NAME       AS GUEST_NAME,
  g.LASTNAME   AS GUEST_LASTNAME,
  a.APPART_ID,
  a.NOM        AS APPART_NAME,
  r.CHECK_IN,
  r.CHECK_OUT,
  r.STATUS
FROM RESERVATIONS r
JOIN GUEST_INFO g
  ON r.GUEST_ID = g.GUEST_ID 
JOIN APPARTEMENT a
  ON r.APPART_ID = a.APPART_ID
  ORDER BY r.RESERVATION_ID DESC
  ;`)
  return rows
}

const getReservationByGuestId = async id => {
  const [rows] = await pool.query(
    `SELECT 
  r.*,
  g.LASTNAME,
  a.NOM as APPART_NAME
FROM RESERVATIONS r
JOIN GUEST_INFO g ON r.GUEST_ID = g.GUEST_ID
JOIN APPARTEMENT a ON r.APPART_ID = a.APPART_ID
WHERE r.GUEST_ID = ?`,
    [id]
  )
  console.log(' >>> REPOSITORY id = ', id)

  return rows
}

const getReservationByGuestMail = async email => {
  const [rows] = await pool.query(
    `SELECT 
       r.*,
       g.LASTNAME,
       a.NOM as APPART_NAME
     FROM RESERVATIONS r
     JOIN GUEST_INFO g ON r.GUEST_ID = g.GUEST_ID
     JOIN APPARTEMENT a ON r.APPART_ID = a.APPART_ID
     WHERE g.EMAIL = ?`,
    [email]
  )

  return rows
}
export const Repository = {
  getAllResa,
  getReservationByGuestId,
  getReservationByGuestMail
}
