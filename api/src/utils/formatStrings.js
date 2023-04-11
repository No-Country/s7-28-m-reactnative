const formatDate = () => {
  const date = new Date()
  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const weekDay = weekDays[date.getDay()]
  const day = date.getDate()

  let month = date.getMonth() + 1
  month = month > 9 ? month : `0${month}`

  const hour = date.getHours()
  const minutes = date.getMinutes()

  return {
    day: `${weekDay}`,
    date: `${day}/${month}`,
    hour: `${hour}:${minutes}`
  }
}

module.exports = { formatDate }
