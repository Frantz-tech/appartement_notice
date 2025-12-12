import { useEffect, useState } from 'react'
import { getData } from '../GET/GetData'

export default function ListAppart() {
  const handleClickDetail = async id => {
    const details = await getData(
      `http://localhost:3001/api/admin/appartement_detail/${id}`
    )
    console.log('Détails de l appartement : ', details.data)
  }
  const [apparts, setApparts] = useState([])
  useEffect(() => {
    async function fetchApparts() {
      const response = await getData(
        'http://localhost:3001/api/admin/appartement'
      )
      console.log('Liste des appartements :', response)
      setApparts(response.data)
    }
    fetchApparts()
  }, [])

  return (
    <div className='galerie p-4 mx-auto flex flex-col  items-center h-full overflow-auto '>
      <h1> Liste des Appartements </h1>

      <div className='grid grid-cols-2 grid-rows-3 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {apparts.map((appart, index) => (
          <div
            key={index}
            className='
         text-black
          rounded-md border-3 border-black 
          p-4
          '>
            <img src='/images/appartement.png' alt='' />
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
      </div>
    </div>
  )
}
