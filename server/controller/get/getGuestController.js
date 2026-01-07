import jwt from 'jsonwebtoken'
import { sendSuccessResponse } from '../../helper/responseHelper.js'
import { Service } from '../../services/get/getGuestService.js'

const getAllGuest = async (req, res, next) => {
  try {
    const guests = await Service.getAllGuest()

    sendSuccessResponse(res, 200, 'Guests récupérés avec succès', guests)
  } catch (err) {
    next(err)
  }
}

const getGuestById = async (req, res, next) => {
  const guest = req.params.id
  try {
    const guestId = await Service.getGuestById(guest)

    sendSuccessResponse(
      res,
      200,
      `Guest avec l'id : ${guest} récupéré avec succès`,
      guestId
    )
  } catch (err) {
    next(err)
  }
}

const connectGuestWithMail = async (req, res, next) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email requis' })
    }
    const guest = await Service.connectGuestWithMail(email)

    const token = jwt.sign(
      { id: guest.GUEST_ID, email: guest.EMAIL },
      process.env.JWT_SECRET,
      {
        expiresIn: '3h'
      }
    )

    sendSuccessResponse(res, 200, 'Email vérifié avec succès', {
      ...guest,
      token
    })
  } catch (err) {
    next(err)
  }
}

export const Controller = {
  getAllGuest,
  getGuestById,
  connectGuestWithMail
}
