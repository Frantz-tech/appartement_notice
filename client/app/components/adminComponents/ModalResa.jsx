import { useEffect, useState } from 'react'
import formatDate from '../../dashboard-admin/GUEST/FormatDate'

export default function DetailReservationModal({ reservation, onClose }) {
  if (!reservation) return null

  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex(i => (i === 0 ? reservations.length - 1 : i - 1))
  }

  const next = () => {
    setIndex(i => (i === reservations.length - 1 ? 0 : i + 1))
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  useEffect(() => {
    setVisible(true)
  }, [])
  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 500)
  }

  // Normalise reservation en tableau
  const reservations = Array.isArray(reservation) ? reservation : [reservation]

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center
      bg-black/10 transition-opacity duration-500
      ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`relative bg-white p-6 rounded-lg
  w-[350px] max-w-[90vw] max-h-[70vh]
  text-black
  transition-transform duration-500
  ${visible ? 'scale-100' : 'scale-95'}`}>
        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-300'
            style={{ transform: `translateX(-${index * 100}%)` }}>
            {reservations.length === 0 ? (
              <div className='w-full text-center'>
                <p>Aucune réservation trouvée</p>
              </div>
            ) : (
              reservations.map(resa => {
                const checkInFormatted = formatDate(resa.CHECK_IN)
                const checkOutFormatted = formatDate(resa.CHECK_OUT)
                const createdFormatted = formatDate(resa.CREATED_AT)
                const statusFormatted = resa.STATUS.replace(
                  /_/g,
                  ' '
                ).toLowerCase()

                return (
                  <div
                    key={resa.RESERVATION_ID}
                    className='w-full flex shrink-0 px-6'>
                    <div className='border rounded-md p-4'>
                      <h2 className='font-bold mb-2'>{resa.RESERVATION_ID}</h2>
                      <p>Nom : {resa.LASTNAME}</p>
                      <p>Appartement : {resa.APPART_NAME}</p>
                      <p>Status : {statusFormatted}</p>
                      <p>Entrée : {checkInFormatted}</p>
                      <p>Sortie : {checkOutFormatted}</p>
                      <p>Créé le : {createdFormatted}</p>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {reservations.length > 1 && (
            <>
              <button
                onClick={prev}
                className='absolute left-2 top-1/2 -translate-y-1/2
        bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow'>
                ‹
              </button>

              <button
                onClick={next}
                className='absolute right-2 top-1/2 -translate-y-1/2
        bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow'>
                ›
              </button>
            </>
          )}
        </div>

        <button
          onClick={handleClose}
          className=' absolute top-1 right-1 bg-black text-white w-6 h-6 rounded cursor-pointer'>
          &#10006;
        </button>
      </div>
    </div>
  )
}
