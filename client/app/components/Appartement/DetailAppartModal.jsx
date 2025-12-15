export default function DetailAppartModal({ appart, onClose }) {
  if (!appart) return null

  const boolYesNo = value => (value === 1 ? 'Oui' : 'Non')
  return (
    <div className='fixed inset-0 text-black bg-black/50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg w-96'>
        <h2 className='text-xl text-black font-bold mb-4'>{appart.NOM}</h2>

        <p>Ascenseur : {boolYesNo(appart.ASCENSEUR)}</p>
        <p>Balcon : {boolYesNo(appart.BALCON)}</p>
        <p>Chambre : {appart.CHAMBRES}</p>
        <p>Cuisine : {boolYesNo(appart.CUISINE)}</p>
        <p>Description : {appart.DESCRIPTION}</p>
        <p>Meubles : {boolYesNo(appart.MEUBLES)}</p>
        <p>Salle de bain : {boolYesNo(appart.SALLE_BAIN)}</p>
        <p>Superficie : {appart.SUPERFICIE}m2 </p>

        <button
          onClick={onClose}
          className='mt-4 bg-black text-white px-4 py-1 rounded'>
          Fermer
        </button>
      </div>
    </div>
  )
}
