'use client'

import { useState } from 'react'
import { DashboardG } from '../dashboardGuest.jsx'
import AlreadyGuestLogin from './AlreadyGuestLogin.jsx'

export default function AlreadyGuest() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <div className='flex flex-row justify-center items-center h-full'>
      <DashboardG />
    </div>
  ) : (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black'>
        <h1 className='max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          Connexion Guest
        </h1>
        <AlreadyGuestLogin onLoginSuccess={() => setIsLoggedIn(true)} />
      </div>
    </div>
  )
}
