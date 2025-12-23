import Galerie from '../Galerie'
import Legal from '../Legal'
import Rules from '../Rules'
import ComingSoon from './Coming'
import ListAppartGuest from './ListAppartGuest'
import ReservationsByGuestId from './ReservationByGuest'

export const menuGuest = [
  {
    label: 'Liste des appartements',
    component: <ListAppartGuest />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'Liste des appartements'
  },
  {
    label: 'Réserver',
    component: <ReservationsByGuestId />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'Gérer mes Réservations'
  },
  {
    label: 'Historique',
    component: <ReservationsByGuestId />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'Historique des réservations'
  },
  {
    label: 'A venir',
    component: <ComingSoon />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'A venir'
  },
  {
    label: 'Galerie ',
    component: <Galerie />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'Galerie photo'
  },

  {
    label: 'Règlement ',
    component: <Rules />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: '🏠 Règlement intérieur de tous les l’appartements'
  },
  {
    label: 'Légal',
    component: <Legal />,
    logo: <img src='/favicon.ico' alt='logoResume' />,
    header: 'Légal'
  }
]

export function SideBarGuest({ setActiveMenu }) {
  const handleLogout = () => {
    localStorage.removeItem('guestData')
    setActiveMenu('')
    window.location.href = '/dashboard-guest'
  }
  return (
    <div
      className='sideBar bg-black h-dvh w-3/12 flex flex-col items-center self-start
    '>
      <div className='logo h-24 w-full flex items-center  '>
        <img src='/favicon.ico' alt='logo société' className='w-10 h-10' />
        <div className=' flex flex-col titleSideBar items-start  p-2  text-center '>
          <h1 className='text-white '> Nom Société </h1>
          <p className='text-white'> Gestion locative </p>
        </div>
      </div>
      <div className='containerList flex flex-col w-full border-b-gray-500 border-b-2 mb-6  '>
        <ul className='space-y-2 pt-10 pb-2 px-2'>
          {menuGuest.map((item, index) => (
            <li
              onClick={() => setActiveMenu(item.label)}
              key={index}
              className='flex items-center text-white hover:bg-yellow-400 p-2 rounded cursor-pointer '>
              {item.logo && <span className='w-5 h-5 mr-2 '>{item.logo}</span>}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className='nameAndExit   p-2'>
        <div className='ml-2 mb-2 nom&role flex flex-col '>
          <h1>Nom du client </h1>
        </div>
        <div
          className='flex h-8 items-center justify-center 
      rounded border border-solid border-black\/\[\.08\] 
      px-5 transition-colors hover:border-transparent hover\:bg-black\/\[\.04\]
       dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer'
          onClick={handleLogout}>
          {' '}
          Déconnexion{' '}
        </div>
      </div>
    </div>
  )
}
