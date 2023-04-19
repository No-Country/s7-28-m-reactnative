import DonwloadButton from "../DownloadButton";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className='w-full min-h-screen h-full pb-10 flex flex-col items-center bg-[#C9D7E1]'>
      <Navbar />
      <section className="max-w-7xl flex flex-col justify-center sm:justify-start md:justify-center h-full">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row sm:items-start md:items-center justify-center md:mt-5">
          <div className="w-full md:w-[380px] lg:w-2/4 relative flex justify-center ">
            <img
              className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[260px] xl:w-[300px] "
              src="/assets/header/headerPhone.png"
              alt=""
            />
            <img
              className="absolute bottom-0 w-[280px] h-[160px] sm:w-[300px] sm:h-[180px] md:w-[340px] md:h-[220px] lg:w-[420px] lg:h-[320px] xl:w-[480px] xl:h-[368px]"
              src="/assets/header/groupcuate.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-around gap-4 px-4 sm:px-0 sm:gap-8 lg:gap-12 xl:gap-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center sm:max-w-sm md:max-w-md lg:max-w-3xl">
              La app que te ayuda a mantener a tus contactos
              <b> informados de tu estado</b>
            </h1>
            <DonwloadButton />
          </div>
        </div>
      </section>
    </header>
  );
}
