'use client'

import { useState } from 'react'
import AdminLogin from '../components/AdminLogin'
import { Dashboard } from './dashboard'

export default function ConnexionAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <h1 className=' flex m-4 justify-center w-full font-medium'>
            Connexion Admin{' '}
          </h1>
          <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />
        </>
      )}
    </div>
  )
}
