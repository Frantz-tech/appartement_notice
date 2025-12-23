import { useEffect, useState } from 'react'
import { getData } from '../CRUD/GET/GetData'
import { FormResaAppart } from './FormResaAppart'

export default function ListAppartGuest() {
  const [apparts, setApparts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAppart, setSelectedAppart] = useState(null)

  const handleClickDetail = async id => {
    const details = await getData(
      `http://localhost:3001/api/admin/appartement_detail/${id}`
    )

    setSelectedAppart(details.data[0])
    setIsModalOpen(true)
  }

  useEffect(() => {
    async function fetchApparts() {
      const response = await getData(
        'http://localhost:3001/api/admin/appartement'
      )
      setApparts(response.data)
      // alert('Appartement récupérés avec succès')
    }
    fetchApparts()
  }, [])

  return (
    <div className='p-4 mx-auto flex flex-col  items-center h-full overflow-auto '>
      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {apparts.map(appart => (
          <div
            key={appart.APPART_ID}
            className='
         text-black
          rounded-md border border-gray-600 cursor-pointer 
          transition duration-300 ease-in-out  
          hover:shadow-lg/30 
          hover:-translate-y-0.5 
          p-4
          '>
            <img src='/appartement.png' alt='' />
            {/* infos  */}
            <div className='text-blue-400'>{appart.NOM}</div>
            <div className='text-blue-300'>{appart.VILLE}</div>
            <div className='text-blue-600'>{appart.CODE_POSTAL}</div>

            {/* Accès au détail du logement : */}

            <button
              onClick={() => handleClickDetail(appart.APPART_ID)}
              className='text-white bg-black cursor-pointer font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-0.5 text-center'>
              Détail
            </button>
          </div>
        ))}
        {isModalOpen && selectedAppart && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/10 z-50'>
            <FormResaAppart
              appartementId={selectedAppart.APPART_ID}
              onClose={() => setIsEditMode(false)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
