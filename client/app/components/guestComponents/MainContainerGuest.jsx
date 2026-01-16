import ListAppartGuest from './ListAppartGuest'
import { menuGuest } from './SideBarGuest'
import TopBarGuest from './topBarGuest'

export function MainContainerGuest({ activeMenu, guest }) {
  const allMenu = [...menuGuest]
  const currentItem = allMenu.find(item => item.label === activeMenu)

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <TopBarGuest guest={guest} />
        <div className='flex flex-col relative w-full h-full overflow-hidden bg-[#E7DFC6] rounded-tl-xl  '>
          <div className='text-3xl w-full  text-black p-5 text-center sticky top-0'>
            {currentItem ? currentItem.header : 'Liste des appartements'}
          </div>
          {currentItem ? currentItem.component : <ListAppartGuest />}
        </div>
      </div>
    </>
  )
}
