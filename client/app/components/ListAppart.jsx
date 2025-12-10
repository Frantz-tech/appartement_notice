import { useEffect, useState } from 'react'
import { getData } from './GET/GetData'

export default function ListAppart() {
  const [apparts, setApparts] = useState([])
  useEffect(() => {
    async function fetchApparts() {
      const data = await getData('http://localhost:3001/api/appartements')
      console.log('Liste des appartements :', data)
      setApparts(data)
    }
    fetchApparts()
  }, [])

  return (
    <div className='galerie p-4 mx-auto flex justify-center items-center h-full '>
      <h1> Liste des Appartements </h1>

      {apparts.map((appart, index) => (
        <div key={index} className='flex m-4'>
          {/* infos  */}
          {appart.nom - appart.ville} {appart.code_postal}
        </div>
      ))}
    </div>
  )
}
