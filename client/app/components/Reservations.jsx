import { useEffect, useState } from 'react'
import formatDate from '../dashboard-admin/GUEST/FormatDate'
import { getData } from './GET/GetData'

export default function Reservations() {
  const [reservations, setRerservation] = useState([])

  useEffect(() => {
    async function fetchReservations() {
      const response = await getData(
        'http://localhost:3001/api/admin/reservations'
      )
      setRerservation(response.data)
      alert('Guest récupérés avec succès')
    }
    fetchReservations()
  }, [])

  return (
    <div className='p-4 mx-auto flex flex-col items-center h-full overflow-auto '>
      <div className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 gap-4'>
        {reservations.map((reservation, index) => {
          const checkInFormatted = formatDate(reservation.CHECK_IN)
          const checkOutFormatted = formatDate(reservation.CHECK_OUT)
          const statusFormatted = reservation.STATUS.replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase())
          return (
            <div
              key={index}
              className='text-black
              relative
          rounded-md border border-gray-600 cursor-pointer 
          transition duration-300 ease-in-out  
          hover:shadow-lg/30 
          hover:-translate-y-0.5 
          p-4'>
              {/* STATUT RIGTH CORNER */}
              <div
                className='
                absolute -top-3 right-3 px-3 py-1
                text-xs font-semibold
                rounded-full
              bg-green-500 text-white'>
                {statusFormatted}
              </div>
              <div>Nom du client : {reservation.GUEST_NAME} </div>
              <div>Prénom : {reservation.GUEST_LASTNAME} </div>
              <div>Email : {reservation.APPART_NAME}</div>
              <div>Date d'entrée : {checkInFormatted}</div>
              <div>Date de sortie : {checkOutFormatted}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// A ajouter plius tard :
