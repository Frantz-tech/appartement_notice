import { menu } from './SideBar'
import TopBar from './topBar'

export function MainContainer({ activeMenu }) {
  const allMenu = [...menu]
  const currentItem = allMenu.find(item => item.label === activeMenu)

  return (
    <>
      <div className='flex flex-col h-full'>
        <TopBar />
        <div className='flex w-full h-full overflow-auto bg-red-500 items-center justify-center '>
          {currentItem ? currentItem.component : <h1> Choisit un menu ! </h1>}
        </div>
      </div>
    </>
  )
}
