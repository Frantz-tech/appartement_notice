'use client'

import { useState } from 'react'

export function FormCreateAppart() {
  const [nom, setNom] = useState('')
  const [adresse, setAdresse] = useState('')
  const [ville, setVille] = useState('')
  const [code_postal, setCode_postal] = useState('')
  const [type, setType] = useState('')
  const [superficie, setSuperficie] = useState('')
  const [chambres, setChambres] = useState('')
  const [sdb, setSdb] = useState('')
  const [cuisine, setCuisine] = useState(false)
  const [meubles, setMeubles] = useState(false)
  const [balcon, setBalcon] = useState(false)
  const [ascenseur, setAscenseur] = useState(false)
  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('http://localhost:30001/api/appartement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom,
        adresse,
        ville,
        code_postal,
        type,
        superficie,
        chambres,
        sdb,
        cuisine,
        meubles,
        balcon,
        ascenseur,
        description
      })
    })

    const data = await response.JSON()

    if (response.ok) {
      alert('Données envoyé avec succes')

      console.log('Body json envoyé en base de donnée : ', data)
    } else {
      alert('Connexion failed ❌')
      setError(data.message)
    }
  }

  return (
    <div className='flex items-start justify-center bg-zinc-50 font-sans dark:bg-black overflow-auto h-full '>
      <div className='flex w-full max-w-3xl flex-col  items-center justify-evenly p-4 bg-white dark:bg-black '>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 m-4 justify-center items-center'>
          <div
            className='
          grid gap-6 mb-6 md:grid-cols-2 
          [&_input]:bg-gray-50 
          [&_input]:border [&_input]:border-gray-300 [&_input]:text-gray-900 
          [&_input]:text-sm [&_input]:rounded-lg [&_input]:focus:ring-blue-500 
          [&_input]:focus:border-blue-500 [&_input]:block [&_input]:w-full [&_input]:p-2.5 
          [&_input]:dark:bg-gray-700 [&_input]:dark:border-gray-600 [&_input]:dark:placeholder-gray-400
           [&_input]:dark:text-white [&_input]:dark:focus:ring-blue-500 [&_input]:dark:focus:border-blue-500
          [&_label]:block
          [&_label]:text-sm
          [&_label]:font-medium
          [&_label]:text-gray-900
          [&_label]:dark:text-white
          '>
            <div>
              <label htmlFor='nom'>Nom</label>
              <input
                type='text'
                id='nom'
                value={nom}
                onChange={e => setNom(e.target.value)}
                placeholder='Nom'
                required
              />
            </div>
            <div>
              <label htmlFor='adresse'>Adresse</label>
              <input
                type='text'
                id='adresse'
                value={adresse}
                onChange={e => setAdresse(e.target.value)}
                placeholder='Adresse'
                required
              />
            </div>
            <div>
              <label htmlFor='ville'>Ville</label>
              <input
                type='text'
                id='ville'
                value={ville}
                onChange={e => setVille(e.target.value)}
                placeholder='Ville'
                required
              />
            </div>
            <div>
              <label htmlFor='code_postal'>Code Postal</label>
              <input
                type='text'
                id='code_postal'
                value={code_postal}
                onChange={e => setCode_postal(e.target.value)}
                placeholder='Code Postal'
                required
              />
            </div>
            <div>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                id='type'
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder='Type'
                required
              />
            </div>
            <div>
              <label htmlFor='superficie'>Superficie</label>
              <input
                type='number'
                id='superficie'
                value={superficie}
                onChange={e => setSuperficie(e.target.value)}
                placeholder='Superficie'
                required
              />
            </div>
            <div>
              <label htmlFor='chambres'>Chambres</label>
              <input
                type='number'
                id='chambres'
                value={chambres}
                onChange={e => setChambres(e.target.value)}
                placeholder='Chambres'
                required
              />
            </div>
            <div>
              <label htmlFor='sdb'>Salle de bain</label>
              <input
                type='number'
                id='sdb'
                value={sdb}
                onChange={e => setSdb(e.target.value)}
                placeholder='Salle de bain'
                required
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='cuisine'>Cuisine</label>
              <input
                type='checkbox'
                id='cuisine'
                checked={cuisine}
                onChange={e => setCuisine(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='meubles'>Meubles</label>
              <input
                type='checkbox'
                id='meubles'
                checked={meubles}
                onChange={e => setMeubles(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='balcon'>Balcon</label>
              <input
                type='checkbox'
                id='balcon'
                checked={balcon}
                onChange={e => setBalcon(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='ascenseur'>Ascenseur</label>
              <input
                type='checkbox'
                id='ascenseur'
                checked={ascenseur}
                onChange={e => setAscenseur(e.target.checked)}
              />
            </div>
            <div className='md:col-span-2'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Description'
              />
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
