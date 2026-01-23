import { useEffect, useState } from 'react'
import { getData } from '../CRUD/GET/GetData'

export default function GaleryAppart({ detail_id }) {
  const [pics, setPictures] = useState([])

  const fetchpics = async () => {
    const response = await getData(
      `http://localhost:3001/api/admin/pictures/${detail_id}`
    )
    setPictures(response.data)
    console.log('réponse : ', response)
  }

  useEffect(() => {
    if (!detail_id) return
    fetchpics()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [detail_id])

  return (
    <div className='absolute inset-0 flex flex-col items-center bg-black/80 overflow-auto '>
      <h1 className='bg-[#E7DFC6] text-black w-full text-center p-4'>
        {/* Formatter le soustitre dans le modal pour afficher uniquement le nom de chambre1.png 
        par example "Chambre 1", "Salon", "Salle de bain" etc */}
        Photos de l'appartement
      </h1>
      <div className='Modal flex flex-col justify-center items-center w-full h-full'>
        {console.log('images : ', pics)}
        {pics.map((pic, id) => (
          <div key={id} className='picsClass'>
            <img
              src={`http://localhost:3001${pic.URL}`}
              className='eachPic w-[50px] h-[50px] '
            />
          </div>
        ))}
      </div>
    </div>
  )
}
