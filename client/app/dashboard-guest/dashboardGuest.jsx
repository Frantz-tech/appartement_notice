import { useState } from 'react'
import { MainContainerGuest } from '../components/guestComponents/MainContainerGuest'
import { SideBarGuest } from '../components/guestComponents/SideBarGuest'

export function DashboardG({ guest }) {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <>
      <SideBarGuest
        guest={guest}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className='containerDashboard h-full w-full '>
        <MainContainerGuest
          guest={guest}
          className='flex'
          activeMenu={activeMenu}
        />
      </div>
    </>
  )
}
