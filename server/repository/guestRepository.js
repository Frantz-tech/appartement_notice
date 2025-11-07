import pool from '../config/db.js'

const getLatestGuest = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM `GUEST` ORDER BY id DESC LIMIT 1'
  )
  return rows[0]
}

export const Repository = {
  getLatestGuest
}
