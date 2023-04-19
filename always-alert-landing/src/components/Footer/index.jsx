import DonwloadButton from '../DownloadButton'

export default function Footer () {
  return (
    <footer className='h-full bg-[#212121] flex flex-col gap-10 items-center py-10 relative'>
      <div className='flex flex-col gap-8 pt-8 sm:pt-20 sm:gap-20 items-center w-full max-w-6xl'>
        <h2 data-aos='fade-up' className='text-white text-3xl sm:text-5xl text-center'>
          ¿Listo para ser parte de Always Alert?
        </h2>
        <section className='flex flex-col gap-10 items-center'>
          <DonwloadButton />
          <img data-aos='fade-up' className='w-96' src='/assets/footer/character.png' alt='' />
        </section>
        <p data-aos='fade-up' className='text-white text-xl text-center'>
          Todos los derechos reservados para el equipo S7-28-M
        </p>
        <img data-aos='fade-up' className='hidden md:block absolute bottom-5 left-5' src='/assets/footer/white_logo.png' alt='' />
      </div>
    </footer>
  )
}
