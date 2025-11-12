import { useState } from 'react'
import { MainContainer } from '../components/MainContainer'
import { SideBarAdmin } from '../components/SideBar'

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
