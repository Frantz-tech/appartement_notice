import { useState } from 'react'
import { MainContainer } from '../components/adminComponents/MainContainer'
import { SideBarAdmin } from '../components/adminComponents/SideBar'

export function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <>
      <SideBarAdmin activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className='containerDashboard h-full w-full '>
        <MainContainer className='flex' activeMenu={activeMenu} />
      </div>
    </>
  )
}
