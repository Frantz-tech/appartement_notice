import { useState } from 'react'

export default function CheckInGuest({ onFormSend }) {
  const [error, setError] = useState('')

  // const handleSubmit = async e => {
  //   e.preventDefault()

  //   const response = await fetch('http://localhost:3001/api/admin/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password })
  //   })

  //   const data = await response.json()

  //   if (response.ok) {
  //     alert('Connexion réussie ✅')
  //     setError('')
  //     onFormSend()
  //     console.log('Connexion réussie', data)
  //   } else {
  //     alert('Connexion failed ❌')
  //     setError(data.message)
  //   }
  // }

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black'>
        <h1 className='max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          Connexion Guest
        </h1>

        <form
          onSubmit={e => {
            e.preventDefault()
            onFormSend()
          }}
          className='flex flex-col gap-4 m-4 justify-center items-center'>
          {error && <p className='text-red-600'>{error} </p>}{' '}
          <div className='grid gap-6 mb-6 md:grid-cols-2'>
            <div>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                First name
              </label>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required
              />
            </div>
            <div>
              <label
                htmlFor='last_name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Last name
              </label>
              <input
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
                type='tel'
                id='phone'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='123-45-678'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Email address
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john.doe@company.com'
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
