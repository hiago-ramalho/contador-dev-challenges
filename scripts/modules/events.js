import updateDate from './update-date'
import calculateDate from './calculate-date'

export default function events() {
  const startButton = document.querySelector('.start-button')
  const returnButton = document.querySelector('.btn.return')
  const modal = document.querySelector('.counter-modal')
  const counter = document.querySelector('.counter-container')

  startButton.addEventListener('click', startCounter)
  returnButton.addEventListener('click', resetCounter)

  function startCounter() {
    modal.classList.add('active')

    setTimeout(() => {
      if (!calculateDate().seconds || calculateDate().seconds < 0) {
        alert('Data incorreta... 😢')
        modal.classList.remove('active')
      }
    }, 1000)
    updateDate()
  }

  function resetCounter() {
    modal.classList.remove('active')
  }
}
