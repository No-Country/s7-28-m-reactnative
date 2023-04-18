export default function Description() {
  return (
    <>
      <section className="h-full flex justify-center gap-[150px] my-20">
        <img width={311} src="/assets/description/phone.png" alt="Home" />
        <div className="w-[657px] h-[671px] rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-transparent">
          <h3 className="w-2/4 text-center">
            Ante cualquier accidente o evento inesperado contaras con nosotros
            para avisar a tus contactos.
          </h3>
          <img width={357} src="/assets/description/character.png" alt="" />
        </div>
      </section>
      <section className="h-full flex justify-center items-center gap-[150px] my-40">
        <div className="w-[657px] h-[671px] rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-transparent">
          <h3 className="w-2/4 text-center">
            <b>Nuestra app te ayuda</b> a infórmarle a tus contactos tu estado,
            para que estén siempre alertas.
          </h3>
          <img width={357} src="/assets/description/character2.png" alt="" />
        </div>
        <img width={311} src="/assets/description/phone2.png" alt="Home" />
      </section>
    </>
  );
}
