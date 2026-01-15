import { useEffect, useState } from 'react'
import { patchData } from '../CRUD/PATCH/PatchData'

export default function StatusModal({ reservation, onClose, onSuccess }) {
  if (!reservation) return null

  const [visible, setVisible] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState(reservation.STATUS)

  const statuses = ['EN_ATTENTE', 'RESERVE', 'PAYE', 'ANNULE']

  const updateStatus = async status => {
    setSelectedStatus(status)
    await patchData(
      `http://localhost:3001/api/admin/reservations/${reservation.RESERVATION_ID}/status`,
      { status },
      'Status modifié avec succès'
    )
    onSuccess()
    onClose(handleClose)
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

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center
      bg-black/10 transition-opacity duration-500
      ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={` relative bg-white flex flex-col px-6 py-4 rounded-lg w-96 text-black
        transition-transform duration-500
        ${visible ? 'scale-100' : 'scale-95'}`}>
        <h2 className='text-xl text-black font-bold mb-4'>
          Mettre à jour le statut
        </h2>

        {statuses.map(s => (
          <button
            key={s}
            onClick={() => {
              updateStatus(s)
            }}
            className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-100 ${
              selectedStatus === s ? 'bg-gray-200 font-bold' : ''
            }`}>
            {s.replace(/_/g, ' ').toLowerCase()}
          </button>
        ))}

        <button
          type='button'
          onClick={handleClose}
          className=' absolute top-1 right-1 bg-black text-white w-6 h-6 rounded cursor-pointer'>
          &#10006;
        </button>
      </div>
    </div>
  )
}
