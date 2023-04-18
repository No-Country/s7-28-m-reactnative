import DonwloadButton from '../DownloadButton'

export default function Footer () {
  return (
    <footer className='h-full bg-[#212121] flex flex-col gap-10 items-center py-10'>
      <div className='flex flex-col gap-8 sm:gap-20 items-center w-full max-w-6xl'>
        <h2 className='text-white text-3xl sm:text-5xl text-center'>
          ¿Listo para ser parte de Always Alert?
        </h2>
        <section className='flex flex-col gap-10'>
          <DonwloadButton />
          <img className='w-[332.14px]' src='/assets/footer/character.png' alt='' />
        </section>
        <div className='flex items-center'>
          <img className='hidden sm:block sm:w-24 p-4' src='/assets/footer/white_logo.png' alt='' />
          <p className='grow text-white text-xl text-center'>
            Todos los derechos reservados para el equipo S7-28-M
          </p>
        </div>
      </div>
    </footer>
  )
}
