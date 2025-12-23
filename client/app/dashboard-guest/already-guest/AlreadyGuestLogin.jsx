import { useEffect, useState } from 'react'
import { postData } from '../../components/CRUD/POST/PostData'

export default function AlreadyGuestLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await postData(
      'http://localhost:3001/api/login/alreadyGuest',
      { email },
      'Email correcte'
    )
    if (response.data && response.data.token) {
      localStorage.setItem(
        'guestToken',
        JSON.stringify({ token: response.data.token, email })
      )
      onLoginSuccess(response.data)
      console.log('Guest data stocké : ', response.data)
    } else {
      setError('Email incorrect')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('guestToken')
    if (token) {
      onLoginSuccess() // reconnecte automatiquement a^res un refresh
    }
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 m-4 justify-center items-center'>
      {error && <p className='text-red-600'> {error} </p>}
      <div className='mb-6'>
        <label
          htmlFor='Email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          {' '}
          Email{' '}
        </label>
        <input
          type='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='•••••••••'
          required
        />
      </div>
      <button
        type='submit'
        className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'>
        Connect
      </button>
    </form>
  )
}
