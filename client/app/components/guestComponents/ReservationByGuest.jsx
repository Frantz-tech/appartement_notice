import { useEffect, useState } from 'react'
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

  if (reservations.length === 0) return <p>Aucune réservation trouvée</p>

  return (
    <div className='bg-red-50 text-black'>
      {reservations.map(r => (
        <div key={r.RESERVATION_ID}>
          {r.APPART_NAME} - {r.CHECK_IN} à {r.CHECK_OUT}
        </div>
      ))}
    </div>
  )
}
