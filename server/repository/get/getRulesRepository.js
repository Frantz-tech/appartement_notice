import pool from '../../config/db.js'

const getAllRules = async () => {
  const [rows] = await pool.query('SELECT * FROM RULES ')
  return rows
}

// const getAppartById = async id => {
//   const [rows] = await pool.query('SELECT * FROM DETAIL WHERE APPART_ID = ?', [
//     id
//   ])
//   return rows
// }
export const Repository = {
  getAllRules
  // getAppartById
}
