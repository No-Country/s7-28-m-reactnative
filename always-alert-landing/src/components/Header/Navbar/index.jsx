import logo from "/assets/logo.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between px-60 py-10">
      <img src={logo} alt="" srcset="" />
      <ul className="flex items-center">
        {/* <li>Descargar</li> */}
        <li>Nosotros</li>
      </ul>
    </div>
  );
}
