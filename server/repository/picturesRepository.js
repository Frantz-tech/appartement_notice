import pool from '../config/db.js'

const createPictures = async (detail_id, urls) => {
  const values = urls.map(url => [detail_id, url]) // urls doit être un tableau
  const [pictures] = await pool.query(
    `INSERT INTO DETAIL_PICTURES (DETAIL_ID, URL) VALUES ?`,
    [values]
  )
  return pictures
}

export const PicRepository = {
  createPictures
}
