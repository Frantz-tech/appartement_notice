import bcrypt from 'bcrypt'
import { Repository } from '../repository/adminRepository.js'

const authenticateAdmin = async (email, plainPassword) => {
  const user = await Repository.findUserByEmail(email)
  console.log(" Service | => Données de l'utilisateur : ", user)

  const errors = []

  if (!user) {
    console.log(' User not found ❌ ') // Utilisateur non trouvé ❌
    errors.push('User not found with this email ❌ ') // fr User non trouvé avec cet email❌

    return { errors }
  }

  const isPasswordValid = await bcrypt.compare(plainPassword, user.mot_de_passe)

  if (!isPasswordValid) {
    console.log(' Wrong password ❌')
    errors.push(' Wrong password ❌')

    return { errors }
  }
  return user
}

export const Service = {
  authenticateAdmin
}
