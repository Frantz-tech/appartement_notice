const menu = ['Résumé global', 'Dernières Modifs']
const menuBis = [
  'Liste des pièces',
  ' Ajouter une pièce',
  'Liste des éléments',
  'Ajouter un élément',
  "Galerie de l'appartement",
  'Ajouter /supprimer pic',
  "Règlement de l'appartement"
]
export function SideBarAdmin() {
  return (
    <div className='sideBar bg-blue-400 w-3/12 flex flex-col items-center justify-center'>
      <h2> Menu </h2>
      <ul className='space-y-2'>
        {menu.map((item, index) => (
          <li
            key={index}
            className='text-white hover:bg-blue-500 p-2 rounded cursor-pointer text-center'>
            {item}
          </li>
        ))}
      </ul>

      <h2> Menu Bis </h2>
      <ul className='space-y-2'>
        {menuBis.map((item, index) => (
          <li
            key={index}
            className='text-white hover:bg-blue-500 p-2 rounded cursor-pointer text-center'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
