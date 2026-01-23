import cors from 'cors'
import dotenv from 'dotenv'
import e from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from './config/db.js'
import routes from './routes/routes.js'

dotenv.config({ path: path.resolve('./server/.env') })

const app = e()

app.use(e.json())

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTION'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

pool.getConnection((err, connection) => {
  if (err) {
    console.error(' ❌ Erreur lors de la connexion à MYSQL : ', err.message)
  } else {
    console.log(' ✅ Connecté à la base de donné MSQL ')
    connection.release()
  }
})

app.use((req, res, next) => {
  const log = `${req.method} ${req.url} - ${new Date().toISOString()}\n`
  app.use('/uploads', e.static(path.join(__dirname, 'public/uploads')))
  // Write logs into access.log
  fs.appendFile(path.join(__dirname, 'access.log'), log, err => {
    if (err) {
      console.error('Failed to write to log file')
    }
  })
  console.log(`➡️ Requête reçue (log) :`, log)

  next()
})

app.use('/api', routes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

export default app
