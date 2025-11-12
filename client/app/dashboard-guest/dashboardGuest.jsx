import { SideBarAdmin } from '../components/SideBar'
import TopBar from '../components/topBar'

export function Dashboard() {
  return (
    <>
      <TopBar />
      <SideBarAdmin />
      <div className='containerDashboard bg-red-500 w-full '> </div>
    </>
  )
}
