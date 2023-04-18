import DonwloadButton from '../DownloadButton'

export default function Footer () {
  return (
    <footer className='h-full bg-[#212121] flex flex-col gap-10 items-center py-10'>
      <div className='flex flex-col gap-20 items-center w-full max-w-6xl relative'>
        <h2 className='text-white text-5xl'>
          ¿Listo para ser parte de Always Alert?
        </h2>
        <section className='flex flex-col gap-10'>
          <DonwloadButton />
          <img className='w-[332.14px]' src='/assets/footer/character.png' alt='' />
        </section>
        <div className='flex'>
          <img width={80} className='absolute bottom-6 left-0' src='/assets/footer/white_logo.png' alt='' />

          <p className='text-white text-xl'>
            Todos los derechos reservados para el equipo S7-28-M
          </p>
        </div>
      </div>
    </footer>
  )
}
