import convertDate from './convert-data'

export default function calculateDate() {
  const currentDate = new Date()
  const futureDate = convertDate()
  const differenceDate = futureDate - currentDate

  function convertInDays(time) {
    return Math.floor(time / (24 * 60 * 60 * 1000))
  }

  function convertInHours(time) {
    return Math.floor(time / (60 * 60 * 1000))
  }

  function convertInMinutes(time) {
    return Math.floor(time / (60 * 1000))
  }

  function convertInSeconds(time) {
    return Math.floor(time / 1000)
  }

  function timeLeft() {
    const days = convertInDays(differenceDate) - 1
    const hours = convertInHours(differenceDate) % 24
    const minutes = convertInMinutes(differenceDate) % 60
    const seconds = convertInSeconds(differenceDate) % 60

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  return timeLeft()
}
