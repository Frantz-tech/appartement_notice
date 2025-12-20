import pool from '../../config/db.js'

const getAllApparts = async () => {
  const [rows] = await pool.query('SELECT * FROM APPARTEMENT ')
  return rows
}

const getAppartById = async id => {
  const [rows] = await pool.query(
    `SELECT 
  d.*,
  a.NOM as APPART_NAME
FROM DETAIL d
JOIN APPARTEMENT a ON d.APPART_ID = a.APPART_ID
WHERE d.DETAIL_ID = ?`,
    [id]
  )
  return rows
}
export const Repository = {
  getAllApparts,
  getAppartById
}
