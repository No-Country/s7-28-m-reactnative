import DonwloadButton from "../DownloadButton";

export default function Footer() {
  return (
    <footer className="h-full bg-black flex flex-col gap-10 items-center pt-10">
      <h2 className="text-white text-[35px]">
        ¿Listo para ser parte de Always Alert?
      </h2>
      <DonwloadButton />
      <img className="w-[332.14px]" src="/assets/footer/character.png" alt="" />
      <div className="flex">
        <img width={50} src="/assets/footer/white_logo.png" alt="" />

        <p className="text-white">
          Todos los derechos reservados para el equipo S7-28-M
        </p>
      </div>
    </footer>
  );
}
