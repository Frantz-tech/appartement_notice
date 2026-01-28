import { useEffect, useState } from 'react'
import formatDate from '../../dashboard-admin/GUEST/FormatDate'
import { getData } from '../CRUD/GET/GetData'
import StatusModal from './StatusModal'

export default function Reservations() {
  const [reservations, setReservations] = useState([])
  const [selectedResa, setSelectedResa] = useState(null)
  const [isModalStatusOpen, setIsModalStatusOpen] = useState(false)
  const [viewMode, setViewMode] = useState('List')

  const fetchReservations = async () => {
    const response = await getData(
      'http://localhost:3001/api/admin/reservations'
    )
    setReservations(response.data)
    // alert('Guest récupérés avec succès')
  }
  useEffect(() => {
    fetchReservations()
  }, [])

  return (
    <div className='p-4 mx-auto flex flex-col items-center h-full overflow-auto '>
      <div
        onClick={() => setViewMode(viewMode === 'List' ? 'Month' : 'List')}
        className='relative mb-10 bg-gray-600 w-40 h-8 rounded-full cursor-pointer flex items-center'>
        <div
          className={`absolute w-1/2 h-8 bg-gray-400 
            rounded-full transform transition-transform duration-700 ${
              viewMode === 'Month' ? 'translate-x-full' : ''
            } `}></div>
        <div
          className={`absolute  left-6 self-center ${
            viewMode === 'List' ? 'text-white' : 'text-black'
          } `}>
          Liste
        </div>
        <div
          className={`absolute  right-2 self-center  ${
            viewMode === 'Month' ? 'text-white' : 'text-black'
          } `}>
          Calendar
        </div>
      </div>

      {viewMode === 'List' ? (
        <div className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 gap-4'>
          {reservations.map(reservation => {
            const checkInFormatted = formatDate(reservation.CHECK_IN)
            const checkOutFormatted = formatDate(reservation.CHECK_OUT)
            const statusFormatted = reservation.STATUS.replace(
              /_/g,
              ' '
            ).toLowerCase()
            const statusColors = {
              EN_ATTENTE: 'bg-yellow-500',
              RESERVE: 'bg-blue-500',
              PAYE: 'bg-green-500',
              ANNULE: 'bg-red-500'
            }
            return (
              <div
                key={reservation.RESERVATION_ID}
                className='text-black
              relative
          rounded-md border border-gray-600 cursor-pointer 
          transition duration-300 ease-in-out  
          hover:shadow-lg/30 
          hover:-translate-y-0.5 
          p-4'>
                {/* STATUT RIGTH CORNER */}
                <div
                  className={`
                absolute -top-3 right-3 px-3 py-1
                text-xs font-semibold
                rounded-full
             text-white
              ${statusColors[reservation.STATUS]}
             `}
                  onClick={e => {
                    e.stopPropagation()
                    setSelectedResa(reservation)
                    setIsModalStatusOpen(true)
                  }}>
                  {statusFormatted}
                </div>
                <div>Nom du client : {reservation.GUEST_NAME} </div>
                <div>Prénom : {reservation.GUEST_LASTNAME} </div>
                <div>Logement : {reservation.APPART_NAME}</div>
                <div>Date d'entrée : {checkInFormatted}</div>
                <div>Date de sortie : {checkOutFormatted}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          <h1 className='text-black font-bold text-4xl'>Mode Calendrier</h1>
          {/* Ici tu pourrais mettre ton tableau ou calendrier */}
        </div>
      )}
      {isModalStatusOpen && selectedResa && (
        <StatusModal
          reservation={selectedResa}
          onClose={() => setIsModalStatusOpen(false)}
          onSuccess={() => {
            fetchReservations()
          }}
        />
      )}
    </div>
  )
}
