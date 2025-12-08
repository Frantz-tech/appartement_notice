export default function ModalGalerie({ src, onClose }) {
  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900'>
      <img
        src={src}
        onClick={e => e.stopPropagation()}
        className='max-w-3xs max-h-3x rounded-lg
        '
      />
    </div>
  )
}
