const startButton = document.querySelector('.btn.start-button')
const returnButton = document.querySelector('.btn.return')
const modal = document.querySelector('.counter-modal')
const messageError = document.querySelector('.message-error p')
const input = document.querySelector('.input-date')
const modalContainer = document.querySelector('.modal-container')
const btnCloseError = document.querySelector('.btn.close-error')

const daysCounter = document.querySelector('#days')
const hoursCounter = document.querySelector('#hours')
const minutesCounter = document.querySelector('#minutes')
const secondsCounter = document.querySelector('#seconds')

startButton.addEventListener('click', e => {
  e.preventDefault()

  const inputDate = new Date(input.value)
  inputDate.setHours(24, 0, 0, 0)

  let displayTime = setInterval(() => {
    modal.classList.add('active')

    try {
      let currentDate = new Date()

      if (inputDate.getTime() < currentDate.getTime()) {
        modalContainer.style.display = 'none'
        throw 'Invalid Date'
      }

      let days = Math.round(
        (inputDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24
      )
      let hours = 23 - currentDate.getHours()
      let minutes = 60 - currentDate.getMinutes()
      let seconds = 60 - currentDate.getSeconds()

      daysCounter.innerHTML = days || '0'
      hoursCounter.innerHTML = hours
      minutesCounter.innerHTML = minutes
      secondsCounter.innerHTML = seconds
    } catch (err) {
      messageError.innerHTML =
        '⚠ Insira uma data correta. A data deve ser maior que a atual! ⚠'

        btnCloseError.addEventListener('click', e => {
          e.preventDefault()
          modal.classList.remove('active')
          window.location.reload()
        })
        clearInterval(displayTime)
        return
    }
  }, 1000)

  returnButton.addEventListener('click', () => {
    window.addEventListener('click', () => {
      window.location.reload()
    })
    clearInterval(displayTime)
    modal.classList.remove('active')
  })
})
