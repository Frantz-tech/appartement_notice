import pool from '../../config/db.js'

const getAllApparts = async () => {
  const [rows] = await pool.query('SELECT * FROM APPARTEMENT ')
  return rows
}

const getAppartById = async id => {
  const [rows] = await pool.query('SELECT * FROM DETAIL WHERE APPART_ID = ?', [
    id
  ])
  return rows
}
export const Repository = {
  getAllApparts,
  getAppartById
}
