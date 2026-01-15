import pool from '../../config/db.js'

const updateStatusResa = async (status, reservationId) => {
  const updatedStatus = await pool.query(
    'UPDATE RESERVATIONS SET STATUS = ? WHERE RESERVATION_ID = ?',
    [status, reservationId]
  )
  return updatedStatus
}

export const Repository = {
  updateStatusResa
}
