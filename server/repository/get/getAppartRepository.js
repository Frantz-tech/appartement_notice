import pool from '../../config/db.js'

const getAllApparts = async () => {
  const [rows] = await pool.query('SELECT * FROM APPARTEMENT ')
  return rows
}
export const Repository = {
  getAllApparts
}
