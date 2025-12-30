import { useEffect, useState } from 'react'

export default function TopBar() {
  return (
    <div className='flex w-full bg-black p-2 px-6 h-24 justify-between items-center'>
      <div className='leftSideColumn flex flex-col justify-evenly'>
        <div className='leftSideTopbar flex items-center gap-2 mb-1'>
          <div className='logo'>
            <img src='/dashboardTop.png' alt='' className='w-10 h-10' />
          </div>
          <div className='title'>
            <p className='font-bold text-white'> Tableau de bord</p>
          </div>
          <div
            className='role flex items-center justify-center gap-2 
      rounded-full border border-solid border-blue-300 
      px-1.5 bg-white -mt-2.5'>
            <img src='/favicon.ico' alt='' className='h-3 w-3' />
            <p className='text-blue-500 font-semibold text-xs'>
              {' '}
              Administrateur
            </p>
          </div>
        </div>
        <div className='textUnderLogo'>
          <p
            className='text-white text-xs text-shadow-xs
          '>
            Bienvenue, Logan HERON. Gérez vos logement depuis ce tableau de bord
          </p>
        </div>
      </div>
      <div className='rightSideTopbar'>
        <Clock />
      </div>
    </div>
  )

  function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
      // Fonction pour mettre à jour l'heure
      const updateTime = () => setTime(new Date())

      // On appelle directement pour initialiser l'heure tout de suite
      updateTime()

      // Calcul du temps restant jusqu'à la prochaine minute
      const now = new Date()
      const msToNextMinute =
        (60 - now.getSeconds()) * 1000 - now.getMilliseconds()

      let interval
      // Timeout pour attendre exactement la prochaine minute
      const timeout = setTimeout(() => {
        updateTime()

        // Après, on met à jour toutes les minutes
        interval = setInterval(updateTime, 60000)
        // On stocke l'interval pour pouvoir le nettoyer à la fin
        // On ajoute interval dans la fermeture du useEffect
        // (on fera ça dans le return)
      }, msToNextMinute)

      // Nettoyage des timers quand le composant est démonté
      return () => {
        clearTimeout(timeout)
        if (interval) clearInterval(interval)
      }
    }, [])

    const optionsDate = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
    const formattedDate = time.toLocaleDateString('fr-FR', optionsDate)

    const optionHour = {
      hour: '2-digit',
      minute: '2-digit'
    }
    const formattedHour = time.toLocaleTimeString('fr-FR', optionHour)

    return (
      <>
        <div className='flex flex-col items-end'>
          <span
            className='text-white text-sm capitalize font-bold
          '>
            {formattedDate}
          </span>
          <span className='text-white text-sm'>{formattedHour}</span>
        </div>
      </>
    )
  }
}
