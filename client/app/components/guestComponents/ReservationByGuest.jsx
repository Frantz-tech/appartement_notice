import { useEffect, useState } from 'react'
import formatDate from '../../dashboard-admin/GUEST/FormatDate'
import { getData } from '../CRUD/GET/GetData'

export default function ReservationsByGuestId() {
  const [reservations, setReservations] = useState([])

  // ✅ Récupération de l'email depuis le token
  const tokenData = JSON.parse(localStorage.getItem('guestToken'))
  const guestEmail = tokenData?.email

  useEffect(() => {
    if (!guestEmail) return

    async function fetchReservations() {
      try {
        const response = await getData(
          `http://localhost:3001/api/guest/reservationsByEmail?email=${guestEmail}`
        )
        setReservations(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchReservations()
  }, [guestEmail])

  return reservations.length === 0 ? (
    <p className='text-black'>Aucune réservation trouvée</p>
  ) : (
    <div className='bg-red-50 text-black'>
      {reservations.map(r => {
        const checkInFormatted = formatDate(r.CHECK_IN)
        const checkOutFormatted = formatDate(r.CHECK_OUT)
        return (
          <div key={r.RESERVATION_ID}>
            {r.APPART_NAME} - {checkInFormatted} à {checkOutFormatted}
          </div>
        )
      })}
    </div>
  )
}
