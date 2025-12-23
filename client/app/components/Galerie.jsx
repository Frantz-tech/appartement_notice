import { useState } from 'react'
import ModalGalerie from './ModalGalerie'
import PhotoCard from './PhotoCard'

export default function Galerie() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const photos = [
    {
      src: '/imgtest.jpeg',
      id: 1
    },
    {
      src: '/img1.jpeg',
      id: 2
    },
    {
      src: '/img2.jpeg',
      id: 3
    },
    {
      src: '/img3.jpeg',
      id: 4
    },
    {
      src: '/img4.jpeg',
      id: 5
    },
    {
      src: '/img5.jpeg',
      id: 6
    },
    {
      src: '/img6.jpeg',
      id: 7
    },
    {
      src: '/img7.jpeg',
      id: 8
    },
    {
      src: '/img8.jpeg',
      id: 9
    },
    {
      src: '/img9.jpeg',
      id: 10
    },
    {
      src: '/img10.jpeg',
      id: 11
    },
    {
      src: '/img10.jpeg',
      id: 12
    }
  ]

  return (
    <div className='galerie p-4 mx-auto overflow-scroll '>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4   '>
        {photos.map(photo => (
          <div key={photo.id} onClick={() => setSelectedPhoto(photo.src)}>
            <PhotoCard
              key={photo.id}
              src={photo.src}
              alt={`photo-${photo.id}`}
            />
          </div>
        ))}
        {selectedPhoto && (
          <ModalGalerie
            src={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </div>
    </div>
  )
}
