'use client'

import { useEffect, useState } from 'react'
import { patchData } from '../CRUD/PATCH/PatchData'
import { postDataFiles } from '../CRUD/POST/PostData'

export function FormCreateAppart({
  mode = 'create',
  initialData = null,
  appartementId = null,
  onClose = null,
  refreshList = null
}) {
  // Animation de l'édit :

  const [visible, setVisible] = useState(mode === 'edit' ? false : true)
  useEffect(() => {
    if (mode === 'edit') {
      const timer = setTimeout(() => setVisible(true), 10)
      return () => clearTimeout(timer)
    }
  }, [mode])
  useEffect(() => {
    if (mode === 'edit') {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [mode])

  const handleClose = () => {
    if (mode === 'edit') {
      setVisible(false)
      setTimeout(() => {
        onClose && onClose()
      }, 400)
    } else {
      onClose && onClose()
    }
  }
  const [pictures, setPictures] = useState([])
  const [nom, setNom] = useState(initialData?.APPART_NAME || '')
  const [adresse, setAdresse] = useState(initialData?.ADRESS_APPART || '')
  const [ville, setVille] = useState(initialData?.TOWN || '')
  const [code_postal, setCode_postal] = useState(initialData?.CP || '')
  const [type, setType] = useState(initialData?.TYPE || '')
  const [superficie, setSuperficie] = useState(initialData?.SUPERFICIE || '')
  const [chambres, setChambres] = useState(initialData?.CHAMBRES || '')
  const [sdb, setSdb] = useState(initialData?.SALLE_BAIN || '')
  const [cuisine, setCuisine] = useState(initialData?.CUISINE ?? true)
  const [meubles, setMeubles] = useState(initialData?.MEUBLES ?? true)
  const [balcon, setBalcon] = useState(initialData?.BALCON ?? false)
  const [ascenseur, setAscenseur] = useState(initialData?.ASCENSEUR ?? false)
  const [description, setDescription] = useState(initialData?.DESCRIPTION || '')
  const types = [
    'Studio',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'Maison',
    'Loft',
    'Duplex',
    'Triplex',
    'Villa',
    'Appartement'
  ]
  useEffect(() => {
    if (initialData) {
      setNom(initialData.APPART_NAME || '')
      setAdresse(initialData.ADRESS_APPART || '')
      setVille(initialData.TOWN || '')
      setCode_postal(initialData.CP || '')
      setType(initialData.TYPE || '')
      setSuperficie(initialData.SUPERFICIE || '')
      setChambres(initialData.CHAMBRES || '')
      setSdb(initialData.SALLE_BAIN || '')
      setCuisine(initialData.CUISINE ?? true)
      setMeubles(initialData.MEUBLES ?? true)
      setBalcon(initialData.BALCON ?? false)
      setAscenseur(initialData.ASCENSEUR ?? false)
      setDescription(initialData.DESCRIPTION || '')
      setPictures(initialData.URL || [])
    }
  }, [initialData])
  const resetForm = () => {
    setNom('')
    setAdresse('')
    setVille('')
    setCode_postal('')
    setType('')
    setSuperficie('')
    setChambres('')
    setSdb('')
    setCuisine(true)
    setMeubles(true)
    setBalcon(false)
    setAscenseur(false)
    setDescription('')
    setPictures([])
  }

  const body = {
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
  }
  const handleSubmit = async e => {
    e.preventDefault()

    if (mode === 'edit') {
      await patchData(
        `http://localhost:3001/api/admin/appartement/${appartementId}`,
        body,
        'Appartement modifié avec succès !'
      )
      refreshList()
      handleClose && handleClose()

      return
    }

    const formData = new FormData()

    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value)
    })

    pictures.forEach(file => {
      formData.append('pictures', file)
    })
    console.log([...formData.entries()])
    await postDataFiles('http://localhost:3001/api/admin/appartement', formData)
    resetForm()
  }

  return (
    <div
      className={`flex items-center justify-center font-sans h-full  ${
        mode === 'edit' ? 'fixed inset-0 bg-black/50 z-50' : ''
      }`}>
      <div
        className={`bg-[#816C61] rounded flex flex-col  items-center justify-evenly transition-all duration-300 ${
          mode === 'edit'
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

          <div
            className='
            grid gap-4 md:grid-cols-2 [&_input]:bg-gray-50 
            [&_input]:border 
          [&_input]:border-gray-300 
          [&_input]:text-gray-900 
            [&_input]:text-sm [&_input]:rounded-lg 
            [&_input]:block 
            [&_input]:w-full 
            [&_input]:p-2
          [&_input]:dark:bg-[#E7DFC6] 
          [&_input]:dark:placeholder-gray-600
          [&_input]:dark:text-gray-900 
          [&_textaera]:dark:bg-[#E7DFC6]
          [&_select]:dark:bg-[#E7DFC6]
          [&_select]:bg-gray-50 
            [&_select]:border 
            [&_select]:border-gray-300 
            [&_select]:text-gray-900 
            [&_select]:text-sm 
            [&_select]:rounded-lg 
            [&_select]:block 
            [&_select]:w-full 
            [&_select]:p-2
          [&_select]:dark:border-gray-600 
          [&_select]:dark:placeholder-gray-400 
          [&_select]:dark:text-gray-600
            [&_input[type=checkbox]:cursor-pointer]
          '>
            <div>
              {/* <label htmlFor='nom'>Nom</label> */}
              <input
                type='text'
                id='nom'
                name='nom'
                value={nom}
                onChange={e => setNom(e.target.value)}
                placeholder='Nom'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='adresse'>Adresse</label> */}
              <input
                type='text'
                id='adresse'
                name='adresse'
                value={adresse}
                onChange={e => setAdresse(e.target.value)}
                placeholder='Adresse'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='ville'>Ville</label> */}
              <input
                type='text'
                id='ville'
                name='ville'
                value={ville}
                onChange={e => setVille(e.target.value)}
                placeholder='Ville'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='code_postal'>Code Postal</label> */}
              <input
                type='text'
                id='code_postal'
                name='code_postal'
                value={code_postal}
                onChange={e => setCode_postal(e.target.value)}
                placeholder='Code Postal'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='type'>Type</label> */}
              <select
                name='type'
                value={type}
                onChange={e => setType(e.target.value)}
                className=''>
                {types.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {/* <label htmlFor='superficie'>Superficie</label> */}
              <input
                type='number'
                id='superficie'
                name='superficie'
                value={superficie}
                onChange={e => setSuperficie(e.target.value)}
                placeholder='Superficie ( m2 )'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='chambres'>Chambres</label> */}
              <input
                type='number'
                id='chambres'
                name='chambres'
                value={chambres}
                onChange={e => setChambres(e.target.value)}
                placeholder='Chambres'
                required
              />
            </div>
            <div>
              {/* <label htmlFor='sdb'>Salle de bain</label> */}
              <input
                type='number'
                id='sdb'
                name='sdb'
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
                name='cuisine'
                checked={cuisine}
                onChange={e => setCuisine(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='meubles'>Meubles</label>
              <input
                type='checkbox'
                id='meubles'
                name='meubles'
                checked={meubles}
                onChange={e => setMeubles(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='balcon'>Balcon</label>
              <input
                type='checkbox'
                id='balcon'
                name='balcon'
                checked={balcon}
                onChange={e => setBalcon(e.target.checked)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <label htmlFor='ascenseur'>Ascenseur</label>
              <input
                type='checkbox'
                id='ascenseur'
                name='ascenseur'
                checked={ascenseur}
                onChange={e => setAscenseur(e.target.checked)}
              />
            </div>
            <div className='md:col-span-2'>
              {/* <label htmlFor='description'>Description</label> */}
              <textarea
                className='
                w-full text-gray-900 text-sm rounded-lg p-2 max-h-[150px]
              bg-[#E7DFC6] dark:text-gray-900 dark:placeholder-gray-600'
                type='text'
                name='description'
                rows='5'
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Description'
              />
            </div>
            <div className='md:col-span-2'>
              <input
                onChange={e => setPictures([...e.target.files])}
                type='file'
                // check pictures
                name='pictures'
                id='pics'
                accept='image/*, .pdf'
                multiple
              />
            </div>
          </div>
          <button
            type='submit'
            className='
          text-white cursor-pointer font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-1.5 text-center 
            focus:ring-4 focus:outline-none  
          bg-[#2274A5] hover:bg-[#1A84C2] focus:ring-[#1A84C2] 
          dark:bg-[#2274A5] dark:hover:bg-[##1A84C2] dark:focus:ring-[#1A84C2]'>
            {mode === 'edit' ? 'Modifier' : 'Créer'}
          </button>
        </form>
      </div>
    </div>
  )
}
