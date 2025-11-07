// server/createGuest.js
import bcrypt from 'bcrypt'
import mysql from 'mysql2/promise'

async function run() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Xpie50b5fe.!*',
    database: 'appartement_notice'
  })

  const plainPassword = 'Xpie50b5fe.!*'

  const saltRounds = 10
  const hash = await bcrypt.hash(plainPassword, saltRounds)

  const [result] = await connection.execute(
    `INSERT INTO GUEST (PASSWORD) VALUES (?)`,
    [hash]
  )

  console.log('Inserted guest id =', result.insertId)
  await connection.end()
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
