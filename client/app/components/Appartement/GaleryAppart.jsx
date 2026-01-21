export default function GaleryAppart({ pictures }) {
  if (!pictures) return
  return (
    <div className='p-4 mx-auto flex flex-col  items-center h-full overflow-auto '>
      <h1 className='bg-red-700 font-black'>Galery Appartement </h1>

      {pictures.map((pics, id) => (
        <div key={id} className='picsClass'>
          <img src={pics.url} alt={`Photos ${id}`} className='eachPic' />
        </div>
      ))}
    </div>
  )
}
