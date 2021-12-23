// Global DOM var
const body = document.querySelector('body')
const pageWrapper = document.querySelector('.photographer-page-wrapper')


//  DOM Modal Elements
const modalDialog = document.querySelector('.modal-wrapper')
const modalOpenBtn = document.querySelectorAll('.js-modalOpen')
const modalCloseBtn = document.querySelector('.js-modalClose')

let previouslyFocusElement = null
let modal = null
const focusableSelector = 'button, a, input, textarea'
let focusables = []

// FORM
const form = document.querySelector('.form')
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')
const inputEmail = document.querySelector('#email')
const inputMessage = document.querySelector('#message')


// Tools
const openModal = (e) => {
  e.preventDefault()
  pageWrapper.setAttribute('aria-hidden', 'true')
  modal = document.querySelector('.modal')
  focusables = Array.from(modal.querySelectorAll(focusableSelector))
  previouslyFocusElement = document.querySelector(':focus')
  focusables[0].focus()
  modal.style.display = null
  modal.removeAttribute('aria-hidden')
  modal.setAttribute('aria-modal', 'true')

  modalCloseBtn.addEventListener('click', closeModal);
  
  body.classList.add('no-scroll')
}

const closeModal = (e) => {
  if (modal === null) return
  pageWrapper.removeAttribute('aria-hidden')
  if (previouslyFocusElement !== null) previouslyFocusElement.focus()
  e.preventDefault()
  const hideModal = function () {
    modal.style.display = "none";
    modal.removeEventListener('animationend', hideModal)
    modal = null
  }

  modal.addEventListener('animationend', hideModal)
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('aria-modal')

  modalCloseBtn.removeEventListener('click', closeModal);
  body.classList.remove('no-scroll')

}

const focusInModal = function (e) {
  e.preventDefault()
  let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
  if (e.shiftKey === true) {
    index--
  } else {
    index++
  }
  if (index >= focusables.length) {
    index = 0
  }
  if (index < 0) {
    index = focusables.length - 1
  }
  focusables[index].focus()

}

// Launch modal event
modalOpenBtn.forEach((btn) => btn.addEventListener('click', openModal));


// Close modal when escape key is pressed
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeModal(e);
  }
  if (e.key === 'Tab' && modal !== null) {
    focusInModal(e)
  }
});

/* *********************************************** */


// Form
// AU Moment du submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Prénom:', inputFirstName.value);
  console.log('Nom:', inputLastName.value);
  console.log('Email:', inputEmail.value);
  console.log('Message:', inputMessage.value);

  if (inputFirstName.value.length > 2) {
    alert('Merci pour votre message');
    closeModal();
  } else {
    alert('Veuillez reverifier vos informations');
  }
})