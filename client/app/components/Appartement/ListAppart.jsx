import { useEffect, useState } from 'react'
import { getData } from '../CRUD/GET/GetData'
import DetailAppartModal from './DetailAppartModal'
import { FormCreateAppart } from './FormCreateAppart'
import GaleryAppart from './GaleryAppart'

export default function ListAppart() {
  const [apparts, setApparts] = useState([])
  const [selectedAppart, setSelectedAppart] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    if (isModalOpen && (isEditMode || !isEditMode)) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isModalOpen, isEditMode])

  const handleEditAppart = appart => {
    setIsModalOpen(true)
    setSelectedAppart({ ...appart })
    setIsEditMode(true)
  }

  const handleClickDetail = async id => {
    const details = await getData(
      `http://localhost:3001/api/admin/appartement_detail/${id}`
    )

    setSelectedAppart(details.data[0])
    setIsModalOpen(true)
  }
  const fetchApparts = async () => {
    const response = await getData(
      'http://localhost:3001/api/admin/appartement'
    )
    setApparts(response.data)
    // alert('Appartement récupérés avec succès')
  }
  useEffect(() => {
    fetchApparts()
  }, [])

  const handleClickAppartPics = appart => {
    setSelectedAppart({ ...appart })
    console.log('Click sur l appart', appart)
  }

  return (
    <div className='p-4 mx-auto flex flex-col  items-center h-full overflow-auto '>
      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {apparts.map((appart, index) => (
          <div
            key={index}
            className='
         text-black
          rounded-md border border-gray-600 cursor-pointer 
          transition duration-300 ease-in-out  
          hover:shadow-lg/30 
          hover:-translate-y-0.5 
          p-4
          '>
            <img
              src='/appartement.png'
              alt=''
              className='clickPic'
              onClick={() => handleClickAppartPics(appart)}
            />
            {/* infos  */}
            <div className='text-blue-400'>{appart.NOM}</div>
            <div className='text-blue-300'>{appart.VILLE}</div>
            <div className='text-blue-600'>{appart.CODE_POSTAL}</div>

            {/* Accès au détail du logement : */}

            <button
              onClick={() => handleClickDetail(appart.APPART_ID)}
              className='text-white bg-black cursor-pointer font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-0.5 text-center'>
              Détails
            </button>
          </div>
        ))}
        {isModalOpen && !isEditMode && (
          <DetailAppartModal
            appart={selectedAppart}
            onClose={() => {
              setIsModalOpen(false)
              setIsEditMode(false)
            }}
            onEdit={handleEditAppart}
          />
        )}
      </div>

      {isModalOpen && isEditMode && selectedAppart && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/10 z-50'>
          <FormCreateAppart
            key={selectedAppart?.APPART_ID}
            mode='edit'
            initialData={selectedAppart}
            appartementId={selectedAppart.APPART_ID}
            onClose={() => {
              setIsEditMode(false)
              setSelectedAppart(null)
              setIsModalOpen(false)
            }}
            refreshList={fetchApparts}
          />
        </div>
      )}
      {selectedAppart && (
        <GaleryAppart
          pictures={selectedAppart.PICTURES}
          onClose={() => {
            setSelectedAppart(null)
          }}
        />
      )}
    </div>
  )
}
