export default function Description () {
  return (
    <>
      <section className='flex flex-col lg:flex-row justify-center lg:mx-8 items-center gap-12 lg:gap-36 my-20'>
        <img className='w-64 sm:w-auto' src='/assets/description/phone.png' alt='Home' data-aos='fade-right' />
        <div data-aos='fade-left' className='lg:w-[640px] lg:h-[640px] rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 py-8 to-transparent'>
          <h3 className='w-2/4 text-center text-xl sm:text-2xl'>
            Ante cualquier <b>accidente o evento inesperado </b> contaras con nosotros
            para avisar a tus contactos.
          </h3>
          <img className='w-64 object-cover sm:w-3/4' src='/assets/description/character.png' alt='' />
        </div>
      </section>
      <section className='h-full flex flex-col-reverse lg:flex-row justify-center lg:mx-8 items-center gap-12 lg:gap-36 my-20'>
        <div data-aos='fade-right' className='lg:w-[640px] lg:h-[640px] rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 py-12 to-transparent'>
          <h3 className='w-2/4 text-center text-xl sm:text-2xl'>
            <b>Nuestra app te ayuda</b> a infórmarle a tus contactos tu estado,
            para que estén siempre alertas.
          </h3>
          <img className='w-64 object-cover sm:w-3/4' src='/assets/description/character2.png' alt='' />
        </div>
        <img data-aos='fade-left' className='w-64 sm:w-auto' src='/assets/description/phone2.png' alt='Home' />
      </section>
    </>
  )
}
