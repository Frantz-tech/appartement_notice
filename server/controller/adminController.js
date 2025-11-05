import jwt from 'jsonwebtoken'
import { sendSuccessResponse } from '../helper/responseHelper.js'
import { Service } from '../services/adminService.js'

const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  try {
    const admin = await Service.authenticateAdmin(email, password)
    console.log('📩 Body reçu :', req.body)
    if (admin.errors && admin.errors.length > 0) {
      return res.status(400).json({ errors: admin.errors })
    }

    const { PASSWORD: _PASSWORD } = admin
    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email
      },

      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    )
    sendSuccessResponse(res, 200, 'Connexion réussie', {
      user: admin,
      token: token
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const Controller = {
  loginAdmin
}
