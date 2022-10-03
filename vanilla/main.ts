const ratingCard = document.querySelector('.card')
const ratingScreen = document.querySelector('.rating_screen')
const ratingSection = document.querySelector('.rating_section')
const ratingInput = ratingSection.querySelector('span')
const resultScreen = document.querySelector('.result_screen')
const editButton = resultScreen.querySelector('button')

function init() {
  for(let i = 2; i <= 5; i++) {
    const rating = ratingInput.cloneNode(true) as HTMLElement
    const input = rating.querySelector('input') as HTMLInputElement
    const label = rating.querySelector('label')
    const id = `rated-${i}`

    input.id = id
    input.value = i.toString()
    label.innerText = i.toString()
    label.setAttribute('for', id)

    if(i === 5) {
      input.checked = true
    }

    ratingSection.appendChild(rating)
  }

  ratingCard.classList.remove('hide')
}

function submitRating(e: SubmitEvent) {
  e.preventDefault()

  const form = new FormData(e.currentTarget as HTMLFormElement)
  const rate = form.get('rating')

  if(!rate) return

  const resultBanner: HTMLFormElement = resultScreen.querySelector('.result_banner')
  
  resultBanner.innerText = `You have selected ${+rate} out of 5`
  ratingScreen.classList.add('hide')
  resultScreen.classList.remove('hide')
  ratingCard.classList.add('result')
}

function editRating() {
  resultScreen.classList.add('hide')
  ratingCard.classList.remove('result')
  ratingScreen.classList.remove('hide')
}

init()
ratingScreen.addEventListener('submit', submitRating)
editButton.addEventListener('click', editRating)
