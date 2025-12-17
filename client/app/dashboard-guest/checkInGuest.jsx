'use client'

import { useEffect, useState } from 'react'
import { postData } from '../components/POST/PostData'

export default function CheckInGuest({ onFormSend }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [checkIn, setcheckIn] = useState('')
  const [checkOut, setcheckOut] = useState('')
  const [appartements, setAppartements] = useState([])
  const [selectedAppartement, setSelectedAppartement] = useState('')

  useEffect(() => {
    async function fetchAppartements() {
      const response = await fetch(
        'http://localhost:3001/api/admin/appartement'
      )
      const data = await response.json()
      setAppartements(data.data)
    }
    fetchAppartements()
  }, [])

  const body = {
    name,
    lastName,
    number,
    email,
    appart_id: selectedAppartement,
    checkIn,
    checkOut,
    status: 'EN_ATTENTE'
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await postData(
      'http://localhost:3001/api/guest/dashboard',
      body,
      'Données envoyé avec succès ! '
    )
    localStorage.setItem(
      'guestData',
      JSON.stringify({
        name,
        lastName
      })
    )
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black'>
        <h1 className='max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          Connexion Guest
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 m-4 justify-center items-center'>
          {error && <p className='text-red-600'>{error} </p>}{' '}
          <div className='grid gap-6 mb-6 md:grid-cols-2'>
            <div>
              <label htmlFor='appartement'>Appartement</label>
              <select
                id='appartement'
                value={selectedAppartement}
                onChange={e => setSelectedAppartement(e.target.value)}
                required>
                {appartements.map(appart => (
                  <option key={appart.APPART_ID} value={appart.APPART_ID}>
                    {appart.NOM} - {appart.VILLE}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                First name
              </label>
              <input
                value={name}
                onChange={e => {
                  setName(e.target.value)
                }}
                type='text'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Last name
              </label>
              <input
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value)
                }}
                type='text'
                id='last_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Doe'
                required
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Phone number
              </label>
              <input
                value={number}
                onChange={e => {
                  setNumber(e.target.value)
                }}
                type='tel'
                id='phone'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='123-45-678'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Email address
              </label>
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john.doe@company.com'
                required
                // pattern='^(\+33|0)[0-9](?:[ .-]?\d{2}){4}$'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='checkIn'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Check In
              </label>
              <input
                value={checkIn}
                onChange={e => {
                  setcheckIn(e.target.value)
                }}
                type='date'
                id='checkIn'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='05-10-2025'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='checkOut'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Check Out
              </label>
              <input
                value={checkOut}
                onChange={e => {
                  setcheckOut(e.target.value)
                }}
                type='date'
                id='checkOut'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='05-10-2025'
                required
              />
            </div>
          </div>
          <div className='flex items-start mb-6'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <label
              htmlFor='remember'
              className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              I agree with the{' '}
              <a
                href='#'
                className='text-blue-600 hover:underline dark:text-blue-500'>
                terms and conditions
              </a>
              .
            </label>
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
