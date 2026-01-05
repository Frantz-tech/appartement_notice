import pool from '../config/db.js'

const createAppartement = async (dataAppart, dataDetailAppart) => {
  const { nom, adresse, ville, code_postal, type } = dataAppart

  // Insert appartement
  const [result] = await pool.query(
    'INSERT INTO APPARTEMENT (NOM, ADRESSE, VILLE, CODE_POSTAL, TYPE) VALUES (?, ?, ?, ?, ?)',
    [nom, adresse, ville, code_postal, type]
  )

  const insertId = result.insertId

  console.log('InsertID de Appartement : ', insertId)

  const {
    superficie,
    chambres,
    sdb,
    cuisine,
    meubles,
    balcon,
    ascenseur,
    description
  } = dataDetailAppart
  // Insert détail
  const [detailResult] = await pool.query(
    'INSERT INTO DETAIL (APPART_ID, SUPERFICIE, CHAMBRES, SALLE_BAIN, CUISINE, MEUBLES, BALCON, ASCENSEUR, DESCRIPTION) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      insertId,
      superficie,
      chambres,
      sdb,
      cuisine,
      meubles,
      balcon,
      ascenseur,
      description
    ]
  )

  return [insertId, detailResult.insertId]
}

const updateAppartement = async (appartId, dataAppart, dataDetailAppart) => {
  const { nom, adresse, ville, code_postal, type } = dataAppart
  const {
    superficie,
    chambres,
    sdb,
    cuisine,
    meubles,
    balcon,
    ascenseur,
    description
  } = dataDetailAppart

  // Update appartement
  await pool.query(
    'UPDATE APPARTEMENT SET NOM = ?, ADRESSE = ?, VILLE = ?, CODE_POSTAL = ?, TYPE = ? WHERE APPART_ID = ?',
    [nom, adresse, ville, code_postal, type, appartId]
  )

  // Update détail
  await pool.query(
    'UPDATE DETAIL SET SUPERFICIE = ?, CHAMBRES = ?, SALLE_BAIN = ?, CUISINE = ?, MEUBLES = ?, BALCON = ?, ASCENSEUR = ?, DESCRIPTION = ? WHERE APPART_ID = ?',
    [
      superficie,
      chambres,
      sdb,
      cuisine,
      meubles,
      balcon,
      ascenseur,
      description,
      appartId
    ]
  )

  return appartId
}

export const Repository = {
  createAppartement,
  updateAppartement
}
