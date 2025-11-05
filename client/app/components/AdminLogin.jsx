import { useState } from 'react'

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.ok) {
      alert('Connexion réussie ✅')
      setError('')
      onLoginSuccess()
      console.log('Connexion réussie', data)
    } else {
      alert('Connexion failed ❌')
      setError(data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      {error && <p className='text-red-600'>{error} </p>}{' '}
      <input
        type='email'
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        placeholder='Password'
        required
      />
      <button
        type='submit'
        className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'>
        Connect
      </button>
    </form>
  )
}
