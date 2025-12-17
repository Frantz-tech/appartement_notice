import pool from '../../config/db.js'

const getAllGuest = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM GUEST_INFO ORDER BY LASTNAME ASC'
  )
  return rows
}

const getGuestById = async id => {
  const [rows] = await pool.query(
    'SELECT * FROM GUEST_INFO WHERE GUEST_ID = ?',
    [id]
  )
  return rows
}
export const Repository = {
  getAllGuest,
  getGuestById
}
