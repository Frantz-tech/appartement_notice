import ListAppart from '../Appartement/ListAppart'
import { menu } from './SideBar'
import TopBar from './topBar'

export function MainContainer({ activeMenu, admin }) {
  const allMenu = [...menu]
  const currentItem = allMenu.find(item => item.label === activeMenu)

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <TopBar admin={admin} />
        <div className='flex flex-col relative w-full h-full overflow-hidden bg-[#E7DFC6] rounded-tl-xl  '>
          <div className='text-3xl w-full  text-black p-5 text-center sticky top-0'>
            {currentItem ? currentItem.header : 'Liste des appartements'}
          </div>
          {currentItem ? currentItem.component : <ListAppart />}
        </div>
      </div>
    </>
  )
}
