import AuthorCard from './AuthorCard'

const authors = [
  {
    image: '',
    name: 'Malena Hernandez',
    function: 'Diseñadora Ux/Ui',
    linkedin: 'https://www.linkedin.com/in/malena-hern%C3%A1ndez-b36057188/'
  },
  {
    image: '',
    name: 'Crismar Silva',
    function: 'Diseñadora Ux/Ui',
    linkedin: 'https://www.linkedin.com/in/crismar-silva/'
  },
  {
    image: '',
    name: 'Martin Maruca',
    function: 'Programador Front-End',
    linkedin: 'https://www.linkedin.com/in/martin-maruca/',
    github: 'https://github.com/martinmaruca'
  },
  {
    image: '',
    name: 'Lautaro Santillan',
    function: 'Programador Front-End',
    linkedin: 'https://www.linkedin.com/in/lauti-santillan/',
    github: 'https://github.com/LautiSantillan'
  },
  {
    image: '',
    name: 'Tomás Herrera',
    function: 'Programador Back-End',
    linkedin: 'https://www.linkedin.com/in/mauro-tomas-herrera',
    github: 'https://github.com/tomasherrera1910'
  },
  {
    image: '',
    name: 'Agustin Lopez Ramallo',
    function: 'Programador Back-End',
    linkedin: 'https://www.linkedin.com/in/marceloagustinlopezramallo/',
    github: 'https://github.com/agustinlopez23'
  },
  {
    image: '',
    name: 'Raúl Ereño',
    function: 'Programador Back-End',
    linkedin: 'https://www.linkedin.com/in/raulereno/',
    github: 'https://github.com/raulereno'
  }
]

export default function Authors () {
  return (
    <section className='h-full bg-[#C9D7E1] flex flex-col items-center py-20 rounded-tl-[80px] rounded-tr-[80px]' id='nosotros'>
      <h2 className='w-2/4 text-center text-2xl'>
        Somos un equipo multidisciplinario de <b>Programadores y Diseñadoras </b> que
        realizamos una aplicación completamente funcional en 5 semanas.
      </h2>
      <section className='flex flex-wrap max-w-5xl gap-12 justify-center mt-10'>
        {authors.map((author) => {
          return (
            <AuthorCard key={author.name} author={author} />
          )
        })}
      </section>
    </section>
  )
}
