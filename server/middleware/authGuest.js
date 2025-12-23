import jwt from 'jsonwebtoken'

export const authGuest = (req, res, next) => {
  const authHeader = req.headers.authorization

  // Vérifie si le header existe
  if (!authHeader) {
    return res.status(401).json({ message: 'Token manquant' })
  }

  // Récupère le token après "Bearer "
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Token manquant' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.guest = decoded // contient id et email
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token invalide', error })
  }
}
