import { useState } from 'react'
import { MainContainerGuest } from '../components/MainContainerGuest'
import { SideBarGuest } from '../components/SideBarGuest'

export function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <>
      <SideBarGuest activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className='containerDashboard h-full w-full '>
        <MainContainerGuest className='flex' activeMenu={activeMenu} />
      </div>
    </>
  )
}
