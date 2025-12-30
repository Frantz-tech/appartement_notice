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
    <div className='m-8  h-full grid grid-cols-[70%_30%] gap-4 text-black'>
      {reservations.map(r => {
        const checkInFormatted = formatDate(r.CHECK_IN)
        const checkOutFormatted = formatDate(r.CHECK_OUT)
        return (
          <>
            <div
              className=' text-black rounded-md border border-gray-600 cursor-pointer  transition duration-300 ease-in-out   hover:shadow-lg/30  hover:-translate-y-0.5  p-4 '
              key={r.RESERVATION_ID}>
              <p className='NameAppart text-yellow-400'> {r.APPART_NAME}</p>
              <p className='NameAppart text-gray-400'> {checkInFormatted}</p>
              <p className='NameAppart text-blue-400'> {checkOutFormatted}</p>
            </div>
            <div className='flex justify-start'>
              <div className='flex items-center'>
                <button
                  // onClick={() => }
                  className='text-white bg-black cursor-pointer font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-0.5 text-center'>
                  Voir l'appartement
                </button>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
