import { SideBarAdmin } from '../SideBar'
import TopBar from '../topBar'

export function Dashboard() {
  return (
    <>
      <TopBar />
      <SideBarAdmin />
      <div className='containerDashboard bg-red-500 w-full '> </div>
    </>
  )
}
