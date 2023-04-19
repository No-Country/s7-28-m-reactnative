export default function DownloadModal ({ open, handleClose }) {
  const apkLink = 'https://expo.dev/artifacts/eas/bz8YexjGpncargm5ncCJJN.apk'
  const baseButtonStyle = 'gap-3 py-2 px-2 lg:py-4 sm:px-4 md:px-8 lg:px-12 rounded-full font-inter text-white mt-2 duration-300 ease-in-out hover:scale-110'
  if (open) {
    return (
      <div className='z-10 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center'>
        <dialog open={open} className='bg-gray-300 rounded-md flex flex-col gap-8 w-11/12 sm:max-w-md sm:gap-16 p-8'>
          <h3 className='text-xl text-center sm:text-2xl'>¿Quieres descargar <b>Always Alert</b>?</h3>
          <section className='w-full flex justify-around'>
            <button onClick={handleClose} className={`bg-[#c2494992] ${baseButtonStyle} hover:shadow-red-950 hover:bg-[#c24949] hover:shadow-sm`}>
              Cancelar
            </button>
            <a target='_blank' href={apkLink} rel='noreferrer' className={`bg-[#4994C2] ${baseButtonStyle} hover:shadow-[#12364d] hover:shadow-sm`}>
              Descargar
            </a>
          </section>
        </dialog>
      </div>
    )
  }
}
