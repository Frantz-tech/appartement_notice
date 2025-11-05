// server/createAdmin.js
const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')

async function run() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Xpie50b5fe.*!',
    database: 'appartement_notice'
  })

  const nom = 'Orsinet'
  const prenom = 'Frantz'
  const email = 'frantz.o@icloud.com'
  const plainPassword = 'Xpie50b5fe.!*'

  const saltRounds = 10
  const hash = await bcrypt.hash(plainPassword, saltRounds)

  const [result] = await connection.execute(
    `INSERT INTO admin (nom, prenom, email, mot_de_passe) VALUES (?, ?, ?, ?)`,
    [nom, prenom, email, hash]
  )

  console.log('Inserted admin id =', result.insertId)
  await connection.end()
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
