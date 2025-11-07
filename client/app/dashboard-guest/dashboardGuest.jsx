import { SideBarAdmin } from '../components/SideBar'
import TopBar from '../components/topBar'

export function Dashboard() {
  return (
    <>
      <TopBar />
      <div className='flex flex-row w-full h-full '>
        <SideBarAdmin />
        <div className='containerDashboard bg-red-500 w-full '> </div>
      </div>
    </>
  )
}
