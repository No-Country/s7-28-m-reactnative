export default function DonwloadButton () {
  return (
    <button className='flex items-center justify-center mx-2 bg-[#4994C2] gap-3 py-2 px-2 lg:py-4 sm:px-4 md:px-8 lg:px-12 rounded-full font-inter text-white mt-2 duration-300 ease-in-out hover:scale-110 hover:animate-pulse hover:shadow-md hover:shadow-gray-800'>
      <img src='/assets/header/iconDownload.svg' alt='' className='w-8 h-8 sm:w-auto sm:h-auto' /> Descargar para
      Android o IOS
    </button>
  )
}
