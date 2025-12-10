import { useEffect, useState } from 'react'
import { getData } from '../GET/GetData'

export default function ListAppart() {
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
    <div className='galerie p-4 mx-auto flex flex-col justify-center items-center h-full '>
      <h1> Liste des Appartements </h1>

      {apparts.map((appart, index) => (
        <div key={index} className='flex flex-col m-4 text-black'>
          {/* infos  */}
          {`${appart.NOM} - ${appart.VILLE}`} - {appart.CODE_POSTAL}
        </div>
      ))}
    </div>
  )
}
