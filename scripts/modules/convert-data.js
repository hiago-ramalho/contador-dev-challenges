/* pega data informa e converte */

export default function convertDate() {
  const dateInformed = document.querySelector('.input-date').value

  function arrayDateConvert() {
    const arrayDate = dateInformed.split('-')
    return {
      day: arrayDate[2],
      month: arrayDate[1],
      year: arrayDate[0]
    }
  }

  const date = arrayDateConvert()
  const futureDate = `${date.month} ${date.day} ${date.year} 23:59:59`

  const convertedDate = new Date(futureDate)

  return convertedDate
}
