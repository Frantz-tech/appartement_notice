import pool from '../../config/db.js'

const getAllApparts = async () => {
  const [rows] = await pool.query('SELECT * FROM APPARTEMENT ')
  return rows
}

const getAppartById = async id => {
  const [rows] = await pool.query(
    `SELECT 
  d.*,
  a.NOM as APPART_NAME,
  a.ADRESSE as ADRESS_APPART,
  a.VILLE as TOWN,
  a.CODE_POSTAL as CP,
  a.TYPE as TYPE
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
