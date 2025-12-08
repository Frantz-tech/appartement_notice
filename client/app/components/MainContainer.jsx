import { menu } from './SideBar'
import TopBar from './topBar'

export function MainContainer({ activeMenu }) {
  const allMenu = [...menu]
  const currentItem = allMenu.find(item => item.label === activeMenu)

  return (
    <>
      <div className='flex flex-col h-dvh'>
        <TopBar />
        <div className='flex flex-col w-full h-full overflow-auto bg-black-500  '>
          <div className='text-3xl w-full bg-neutral-400 p-4 text-center'>
            {currentItem ? currentItem.header : 'Choisis un Menu'}
          </div>
          {currentItem ? currentItem.component : <h1> Choisit un menu ! </h1>}
        </div>
      </div>
    </>
  )
}
