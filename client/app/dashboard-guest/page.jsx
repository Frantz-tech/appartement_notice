'use client'

import { useState } from 'react'
import GuestLogin from '../components/GuestLogin'
import CheckInGuest from './checkInGuest'
import { Dashboard } from './dashboardGuest'

export default function ConnexionGuest() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formComplete, setFormComplete] = useState(false)

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
