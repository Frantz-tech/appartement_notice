import { useEffect, useState } from 'react'
import { getData } from '../CRUD/GET/GetData'

export default function GaleryAppart({ detail_id, onClose }) {
  const [pics, setPictures] = useState([])
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const previousImg = () => {
    setIndex(prev => (prev === 0 ? pics.length - 1 : prev - 1))
  }

  const nextImg = () => {
    setIndex(next => (next === pics.length - 1 ? 0 : next + 1))
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

  const fetchpics = async () => {
    const response = await getData(
      `http://localhost:3001/api/admin/pictures/${detail_id}`
    )
    setPictures(response.data)
    setIndex(0)
    // console.log('réponse : ', response)
  }

  useEffect(() => {
    if (!detail_id) return
    fetchpics()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [detail_id])

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center bg-black/90 overflow-auto transition-opacity duration-450
      ${visible ? 'opacity-100' : 'opacity-0'}}  `}>
      <h1
        className={`bg-[#E7DFC6] text-black text-3xl w-full text-center p-5 transition-opacity duration-450
      ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Formatter le soustitre dans le modal pour afficher uniquement le nom de chambre1.png 
        par example "Chambre 1", "Salon", "Salle de bain" etc */}
        Photos de l'appartement
      </h1>
      <div
        className={`Modal overflow-scroll relative flex justify-center items-center w-full h-full transition-opacity duration-500
  ${visible ? 'opacity-100' : 'opacity-0'} }`}>
        {/* {console.log('images : ', pics)} */}
        <div className='relative w-[800px] h-[450px] overflow-hidden'>
          {pics.length > 0 && (
            <div className='picsClass px-5'>
              <img
                src={`http://localhost:3001${pics[index].URL}`}
                className='eachPic rounded-sm  w-[800px] h-[450px] object-cover '
              />
              <button
                onClick={previousImg}
                className='absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer text-3xl
                text-white'>
                ‹
              </button>

              <button
                onClick={nextImg}
                className='absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer text-3xl
              text-white '>
                ›
              </button>
            </div>
          )}
        </div>
        <button
          onClick={handleClose}
          className={`absolute top-0 right-0 bg-black text-white w-6 h-6 rounded cursor-pointer ${visible ? 'opacity-100' : 'opacity-0'}`}>
          &#10006;
        </button>
      </div>
    </div>
  )
}
