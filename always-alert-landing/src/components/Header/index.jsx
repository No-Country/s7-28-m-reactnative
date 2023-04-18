import DonwloadButton from '../DownloadButton'
import Navbar from './Navbar'

export default function Header () {
  return (
    <header className='w-full h-screen flex flex-col items-center bg-[#C9D7E1]'>
      <Navbar />
      <section className='max-w-7xl'>
        <div className='flex items-center justify-center mt-5'>
          <div className='w-2/4 relative flex justify-center '>
            <img width={300} src='/assets/header/headerPhone.png' alt='' />
            <img
              className='absolute bottom-0 w-[473px] h-[369.02px]'
              src='/assets/header/groupcuate.png'
              alt=''
            />
          </div>
          <div className='flex flex-col items-center justify-around gap-16'>
            <h1 className='text-5xl text-center max-w-3xl'>
              La app que te ayuda a mantener a tus contactos
              <b> informados de tu estado</b>
            </h1>
            <DonwloadButton />
          </div>
        </div>
      </section>
    </header>
  )
}
