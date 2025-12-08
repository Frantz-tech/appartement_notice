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
      src: 'images/img1.jpeg',
      id: 2
    },
    {
      src: 'images/img2.jpeg',
      id: 3
    },
    {
      src: 'images/img3.jpeg',
      id: 4
    },
    {
      src: 'images/img4.jpeg',
      id: 5
    },
    {
      src: 'images/img5.jpeg',
      id: 6
    },
    {
      src: 'images/img6.jpeg',
      id: 7
    },
    {
      src: 'images/img7.jpeg',
      id: 8
    },
    {
      src: 'images/img8.jpeg',
      id: 9
    },
    {
      src: 'images/img9.jpeg',
      id: 10
    },
    {
      src: 'images/img10.jpeg',
      id: 11
    },
    {
      src: 'images/img10.jpeg',
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
