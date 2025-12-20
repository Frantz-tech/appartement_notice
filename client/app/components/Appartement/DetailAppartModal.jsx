import { useEffect, useState } from 'react'

export default function DetailAppartModal({ appart, onClose }) {
  if (!appart) return null

  const [visible, setVisible] = useState(false)

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

  const boolYesNo = value => (value === 1 ? 'Oui' : 'Non')
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
          {appart.APPART_NAME}
        </h2>

        <p>Ascenseur : {boolYesNo(appart.ASCENSEUR)}</p>
        <p>Balcon : {boolYesNo(appart.BALCON)}</p>
        <p>Chambre : {appart.CHAMBRES}</p>
        <p>Cuisine : {boolYesNo(appart.CUISINE)}</p>
        <p>Meubles : {boolYesNo(appart.MEUBLES)}</p>
        <p>Salle de bain : {appart.SALLE_BAIN}</p>
        <p>Superficie : {appart.SUPERFICIE}m2 </p>
        <p>
          Description : <br /> {appart.DESCRIPTION}
        </p>

        <div className='flex justify-center mt-5'>
          <button className='text-white bg-black cursor-pointer font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-0.5 text-center'>
            Modifier
          </button>
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
