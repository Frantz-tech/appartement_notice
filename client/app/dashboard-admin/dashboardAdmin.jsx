import { useState } from 'react'
import { MainContainer } from '../components/adminComponents/MainContainer'
import { SideBarAdmin } from '../components/adminComponents/SideBar'

export function Dashboard({ admin }) {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <>
      <SideBarAdmin
        admin={admin}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className='containerDashboard h-full w-full '>
        <MainContainer className='flex' activeMenu={activeMenu} />
      </div>
    </>
  )
}
