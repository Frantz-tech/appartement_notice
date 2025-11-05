'use client'

import GuestLogin from '../components/GuestLogin'

export default function DashboardGuest() {
  return (
    <div>
      <h1 className=' flex m-4 justify-center w-full font-medium'>
        Dashboard Guest{' '}
      </h1>

      <GuestLogin />

      <p> Contenu du Dashboard guest </p>
    </div>
  )
}
