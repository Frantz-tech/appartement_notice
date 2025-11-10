'use client'

import { useEffect, useState } from 'react'
import GuestLogin from './GuestLogin'
import CheckInGuest from './checkInGuest'
import { Dashboard } from './dashboardGuest'

export default function ConnexionGuest() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formComplete, setFormComplete] = useState(false)

  useEffect(() => {
    const savedGuest = JSON.parse(localStorage.getItem('guestData'))
    if (savedGuest) {
      // If user is already connected, with local storage he can scan
      // the QR code again and will see the dashboard instant ( Need to Verify later)
      setIsLoggedIn(true)
      setFormComplete(true)
    }
  }, [])

  return isLoggedIn ? (
    formComplete ? (
      <div className='flex flex-col justify-center items-center'>
        <Dashboard />
      </div>
    ) : (
      <div className='flex flex-col justify-center items-center'>
        <CheckInGuest onFormSend={() => setFormComplete(true)} />
      </div>
    )
  ) : (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black'>
        <h1 className='max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          Connexion Guest
        </h1>
        <GuestLogin onLoginSuccess={() => setIsLoggedIn(true)} />
      </div>
    </div>
  )
}
