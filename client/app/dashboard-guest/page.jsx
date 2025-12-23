'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import GuestLogin from './GuestLogin'
import CheckInGuest from './checkInGuest'
import { DashboardG } from './dashboardGuest'

export default function ConnexionGuest() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formComplete, setFormComplete] = useState(false)

  useEffect(() => {
    const savedGuestRaw = localStorage.getItem('guestData')
    if (savedGuestRaw) {
      try {
        const savedGuest = JSON.parse(savedGuestRaw) // maintenant c'est bien l'objet guest
        setIsLoggedIn(true)
        setFormComplete(true)
      } catch (err) {
        console.error('Erreur parsing guestData', err)
      }
    }
  }, [])

  return isLoggedIn ? (
    formComplete ? (
      <div className='flex flex-row justify-center items-center h-full'>
        <DashboardG />
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
        <Link href='/dashboard-guest/already-guest'>
          {' '}
          Déja client ? Connectez-vous ici !{' '}
        </Link>
        {/* Faire le composant pour la connexion "AlreadyGuest.jsx" formulaire avec un input email, 
        check en bdd si il correspond et redirection vers le dashboard lié a cet Id */}
      </div>
    </div>
  )
}
