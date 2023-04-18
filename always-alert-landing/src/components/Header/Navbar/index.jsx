import logo from '../../../../public/assets/logo.svg'

export default function Navbar () {
  return (
    <div className='flex justify-between w-full max-w-7xl px-60 py-10'>
      <img src={logo} alt='' srcset='' />
      <ul className='flex items-center'>
        {/* <li>Descargar</li> */}
        <a href='#nosotros'>
          <li className='font-bold text-xl ease-in-out duration-300 hover:underline'>Nosotros</li>
        </a>
      </ul>
    </div>
  )
}
