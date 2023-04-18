import DonwloadButton from '../DownloadButton'
import Navbar from './Navbar'

export default function Header () {
  return (
    <header className='w-full h-full bg-[#C9D7E1]'>
      <Navbar />
      <div className='flex items-center justify-center mt-5'>
        <div className='w-2/4 relative flex justify-center '>
          <img width={300} src='/assets/header/headerPhone.png' alt='' />
          <img
            className='absolute bottom-0 w-[473px] h-[369.02px]'
            src='/assets/header/groupcuate.png'
            alt=''
          />
        </div>
        <div className='w-2/4 flex flex-col items-start'>
          <h1 className='text-[48px] w-[70%]'>
            La app que te ayuda a mantener a tus contactos
            <b> informados de tu estado</b>
          </h1>
          <DonwloadButton />
        </div>
      </div>
    </header>
  )
}
