import formatDate from '../dashboard-admin/GUEST/FormatDate'

export default function DetailReservationModal({ reservation, onClose }) {
  if (!reservation) return null

  // Normalise reservation en tableau
  const reservations = Array.isArray(reservation) ? reservation : [reservation]

  return (
    <div className='fixed inset-0 text-black bg-black/10 flex items-center justify-center'>
      <div className='bg-white flex flex-col p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto'>
        {reservations.length === 0 ? (
          <p>Aucune réservation trouvée</p>
        ) : (
          reservations.map(resa => {
            const checkInFormatted = formatDate(resa.CHECK_IN)
            const checkOutFormatted = formatDate(resa.CHECK_OUT)
            const createdFormatted = formatDate(resa.CREATED_AT)
            const statusFormatted = resa.STATUS.replace(/_/g, ' ').toLowerCase()
            return (
              <div key={resa.RESERVATION_ID} className='mb-4 border-b pb-2'>
                <h2 className='text-xl text-black font-bold mb-2'>
                  {resa.RESERVATION_ID}
                </h2>
                <p>Nom : {resa.LASTNAME}</p>
                <p>Appartement : {resa.APPART_ID}</p>
                <p>Entrée : {checkInFormatted}</p>
                <p>Sortie : {checkOutFormatted}</p>
                <p>Status : {statusFormatted}</p>
                <p>Créer le : {createdFormatted}</p>
              </div>
            )
          })
        )}

        <button
          onClick={onClose}
          className='mt-4 bg-black text-white px-4 py-1 rounded'>
          Fermer
        </button>
      </div>
    </div>
  )
}
