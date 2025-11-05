import pool from '../config/db.js'

// Récupération de l'admin

const findUserByEmail = async email => {
  const [rows] = await pool.query('SELECT * FROM `admin` WHERE email = ? ', [
    email
  ])
  return rows[0]
}

export const Repository = {
  findUserByEmail
}
