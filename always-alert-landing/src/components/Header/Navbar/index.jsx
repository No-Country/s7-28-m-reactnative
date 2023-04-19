import logo from '../../../../public/assets/logo.svg'

export default function Navbar () {
  return (
    <div className='flex justify-between w-full max-w-7xl px-6 py-2 sm:px-16 sm:py-4 md:px-32 xl:px-60 lg:py-10 xl:py-8'>
      <img data-aos='zoom-in' src={logo} alt='' srcSet='' className='w-16 h-16 sm:w-auto sm:h-auto' />
      <ul data-aos='zoom-in' className='flex items-center'>
        {/* <li>Descargar</li> */}
        <a href='#nosotros'>
          <li className='font-bold text-base sm:text-xl ease-in-out duration-300 hover:underline'>Nosotros</li>
        </a>
      </ul>
    </div>
  )
}
