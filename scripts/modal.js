const startButton = document.querySelector('.start-button')
const returnButton = document.querySelector('.btn.return')
const modal = document.querySelector('.counter-modal')

startButton.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.add('active')
})

returnButton.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.remove('active')
})

/* calcular data */
