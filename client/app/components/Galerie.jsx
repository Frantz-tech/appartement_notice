import { useState } from 'react'
import ModalGalerie from './ModalGalerie'
import PhotoCard from './PhotoCard'

export default function Galerie() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const photos = [
    {
      src: 'images/imgtest.jpeg',
      id: 1
    },
    {
      src: 'images/imgtest.jpeg',
      id: 2
    },
    {
      src: 'images/imgtest.jpeg',
      id: 3
    },
    {
      src: 'images/imgtest.jpeg',
      id: 4
    },
    {
      src: 'images/imgtest.jpeg',
      id: 5
    },
    {
      src: 'images/imgtest.jpeg',
      id: 6
    },
    {
      src: 'images/imgtest.jpeg',
      id: 7
    },
    {
      src: 'images/imgtest.jpeg',
      id: 8
    },
    {
      src: 'images/imgtest.jpeg',
      id: 9
    },
    {
      src: 'images/imgtest.jpeg',
      id: 10
    },
    {
      src: 'images/imgtest.jpeg',
      id: 11
    },
    {
      src: 'images/imgtest.jpeg',
      id: 12
    }
  ]

  return (
    <div className='galerie p-4 mx-auto flex justify-center items-center h-auto '>
      <div className='grid grid-cols-4 gap-10 mx-5'>
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
