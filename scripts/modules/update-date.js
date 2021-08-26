import calculateDate from './calculate-date'

export default function updateDate() {
  const days = document.querySelector('#days')
  const hours = document.querySelector('#hours')
  const minutes = document.querySelector('#minutes')
  const seconds = document.querySelector('#seconds')
  console.log(days)

  const timer = setInterval(() => {
    days.innerText = calculateDate().days
    hours.innerText = calculateDate().hours
    minutes.innerText = calculateDate().minutes
    seconds.innerText = calculateDate().seconds
  }, 1000)
}
