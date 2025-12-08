export default function PhotoCard({ src, alt }) {
  return (
    <div className='w-[200px] h-[300px] overflow-hidden rounded-lg shadow-md border'>
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover cursor-pointer'
      />
    </div>
  )
}
