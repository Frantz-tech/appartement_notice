import AddDeletedRoom from './AddDelete'
import AddElem from './AddElem'
import AddRoom from './AddRoom'
import Galerie from './Galerie'
import LastModif from './LastModif'
import ListElem from './ListElem'
import ListRoom from './ListRoom'
import Resume from './Resume'
import Rules from './Rules'

export const menu = [
  {
    label: 'Résumé global',
    component: <Resume />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Dernières modifs ',
    component: <LastModif />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Liste des pièces',
    component: <ListRoom />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Ajouter une pièce',
    component: <AddRoom />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Liste des éléments',
    component: <ListElem />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Ajouter un élément',
    component: <AddElem />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Galerie ',
    component: <Galerie />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Ajouter /supprimer ',
    component: <AddDeletedRoom />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  },
  {
    label: 'Règlement ',
    component: <Rules />,
    logo: <img src='./favicon.ico' alt='logoResume' />
  }
]
export function SideBarAdmin({ setActiveMenu }) {
  return (
    <div
      className='sideBar bg-blue-400 h-full w-3/12 flex flex-col items-center  
    '>
      <div className='logo w-full flex items-center border-b-gray-500 border-b-2 px-2 '>
        <img src='./favicon.ico' alt='logo société' className='w-10 h-10' />
        <div className=' flex flex-col titleSideBar items-start  p-2  text-center '>
          <h1 className='text-black '> Nom Société </h1>
          <p className='text-gray-700'> Gestion locative </p>
        </div>
      </div>
      <div className='containerList flex flex-col w-full border-b-gray-500 border-b-2 mb-6  '>
        <ul className='space-y-2 p-2'>
          {menu.map((item, index) => (
            <li
              onClick={() => setActiveMenu(item.label)}
              key={index}
              className='flex items-center text-black hover:bg-blue-500 p-2 rounded cursor-pointer '>
              {item.logo && <span className='w-5 h-5 mr-2 '>{item.logo}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className='nameAndExit   p-2'>
        <div className='ml-2 mb-2 nom&role flex flex-col '>
          <h1>Logan</h1>
          <p>Administreur</p>
        </div>
        <div
          className='flex h-8 items-center justify-center 
      rounded border border-solid border-black\/\[\.08\] 
      px-5 transition-colors hover:border-transparent hover\:bg-black\/\[\.04\]
       dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer'>
          {' '}
          Déconnexion{' '}
        </div>
      </div>
    </div>
  )
}
