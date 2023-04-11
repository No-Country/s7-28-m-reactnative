const formatDate = () => {
  const fecha = new Date()
  const nombresDiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const diaSemana = nombresDiasSemana[fecha.getDay()]
  const dia = fecha.getDate()
  const mes = fecha.getMonth() + 1
  const hora = fecha.getHours()
  const minutos = fecha.getMinutes()

  const formattedFecha = `${diaSemana} ${dia}/${mes} a las ${hora}:${minutos}hs`

  console.log(formattedFecha)
  return formattedFecha
}

module.exports = { formatDate }
