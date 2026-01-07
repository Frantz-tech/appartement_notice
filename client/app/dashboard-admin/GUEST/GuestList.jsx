import { useEffect, useState } from 'react'
import { getData } from '../../components/CRUD/GET/GetData'
import DetailReservationModal from '../../components/adminComponents/ModalResa'

export default function GuestList() {
  const [guests, setGuests] = useState([])
  const [reservationId, setReservationId] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickDetail = async guestId => {
    const detailsReservation = await getData(
      `http://localhost:3001/api/guest/reservations/${guestId}`
    )
    setReservationId(detailsReservation.data)
    setIsModalOpen(true)
  }
  // const [selectedGuest, setSelectedGuest] = useState(null)

  useEffect(() => {
    async function fetchGuests() {
      const response = await getData('http://localhost:3001/api/admin/guest')
      setGuests(response.data)
      // alert('Guest récupérés avec succès')
    }
    fetchGuests()
  }, [])

  return (
    <div className='p-4 mx-auto flex flex-col items-center h-full overflow-auto '>
      <div className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 gap-4'>
        {guests.map((guest, index) => {
          const numberFormatted = guest.NUMBER.replace(/(\d{2})(?=\d)/g, '$1.')
          return (
            <div
              onClick={() => handleClickDetail(guest.GUEST_ID)}
              key={index}
              className='text-black
              relative
          rounded-md border border-gray-600 cursor-pointer 
          transition duration-300 ease-in-out  
          hover:shadow-lg/30 
          hover:-translate-y-0.5 
          p-4'>
              <div>Nom : {guest.LASTNAME} </div>
              <div>Prénom : {guest.NAME} </div>
              <div>Email : {guest.EMAIL}</div>
              <div>Numéro : {numberFormatted}</div>
            </div>
          )
        })}
        {isModalOpen && (
          <DetailReservationModal
            reservation={reservationId}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  )
}
