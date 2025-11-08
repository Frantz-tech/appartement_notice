import pool from '../config/db.js'

const getLatestGuest = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM `GUEST` ORDER BY id DESC LIMIT 1'
  )
  return rows[0]
}

const createGuest = async guestData => {
  const { name, lastName, number, email, checkIn, checkOut } = guestData
  const [result] = await pool.query(
    'INSERT INTO GUEST_INFO (NAME, LASTNAME, NUMBER, EMAIL, CHECK_IN, CHECK_OUT) VALUE (?, ?, ?, ?, ?, ? )',
    [name, lastName, number, email, checkIn, checkOut]
  )
  console.log('Repository || new Guest info : ', result)

  return result.insertId
}

export const Repository = {
  getLatestGuest,
  createGuest
}
