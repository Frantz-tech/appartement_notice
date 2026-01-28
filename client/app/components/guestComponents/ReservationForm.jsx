import { useEffect, useState } from 'react'
import { postData } from '../CRUD/POST/PostData'

export default function BookForm({
  mode = 'book',
  appartementId = null,
  onClose = null
}) {
  const [formData, setFormData] = useState({
    dateDebut: '',
    dateFin: ''
  })

  // Animation de la reservation :

  const [visible, setVisible] = useState(mode === 'book' ? false : true)
  useEffect(() => {
    if (mode === 'book') {
      const timer = setTimeout(() => setVisible(true), 10)
      return () => clearTimeout(timer)
    }
  }, [mode])
  useEffect(() => {
    if (mode === 'book') {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [mode])

  const handleClose = () => {
    if (mode === 'book') {
      setVisible(false)
      setTimeout(() => {
        onClose && onClose()
      }, 400)
    } else {
      onClose && onClose()
    }
  }
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const guestToken = localStorage.getItem('guestToken')

  const handleSubmit = async e => {
    e.preventDefault()
    if (!guestToken) {
      alert('Vous devez être connecté pour réserver !')
    }
    const tokenObj = JSON.parse(guestToken)
    const token = tokenObj.token
    console.log('TOKEN LORS DU SUBMIT :  ', token)
    console.log('Info client :', formData)

    // Appel API ici apres
    if (mode === 'book') {
      const body = {
        appartId: appartementId,
        checkIn: formData.dateDebut,
        checkOut: formData.dateFin
      }

      await postData(
        `http://localhost:3001/api/guest/reservation/me`,
        body,
        'Appartement Réservé avec succès !',
        { Authorization: `Bearer ${token}` }
      )
    }
    //
    //
    handleClose && handleClose()

    return
  }

  return (
    <div
      className={`flex items-center justify-center font-sans h-full  ${
        mode === 'book' ? 'fixed inset-0 bg-black/50 z-50' : ''
      }`}>
      <div
        className={`bg-gray-600 rounded flex flex-col  items-center justify-evenly transition-all duration-300 ${
          mode === 'book'
            ? visible
              ? 'scale-100 opacity-100 px-5 pt-5'
              : 'scale-0 opacity-0'
            : ''
        }`}>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 m-3 justify-center items-center'>
          {onClose && (
            <button
              type='button'
              onClick={handleClose}
              className='
              absolute
              top-1
              right-1
              bg-white
              text-black
              w-6
              h-6
              rounded
              flex
              items-center
              justify-center
              cursor-pointer'>
              &#10006;
            </button>
          )}
          <h2 className='text-lg font-bold'> Réserver {appartementId}</h2>

          <input name='dateDebut' type='date' onChange={handleChange} />
          <input name='dateFin' type='date' onChange={handleChange} />

          <button className='bg-black text-white rounded'>Réserver</button>
          <button
            type='button'
            onClick={handleClose}
            className=' absolute top-1 right-1 bg-black text-white w-6 h-6 rounded cursor-pointer'>
            &#10006;
          </button>
        </form>
      </div>
    </div>
  )
}
