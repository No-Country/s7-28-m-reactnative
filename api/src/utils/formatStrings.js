const formatDate = () => {
  const date = new Date()
  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const weekDay = weekDays[date.getDay()]
  const day = date.getDate()
  const month = date.getMonth() + 1
  const hour = date.getHours()
  const minutes = date.getMinutes()

  return {
    day: `${weekDay}`,
    date: `${day}/0${month}`,
    hour: `${hour}:${minutes}`
  }
}

module.exports = { formatDate }
