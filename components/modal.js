// Global DOM var
const body = document.querySelector('body')
const pageWrapper = document.querySelector('.photographer-page-wrapper')


//  DOM Modal Elements
const modalDialog = document.querySelector('.modal-wrapper')
const modalOpenBtn = document.querySelectorAll('.js-modalOpen')
const modalCloseBtn = document.querySelector('.js-modalClose')
// const CloseModal = document.querySelector(".close-modal")

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
// const thankClosing = document.querySelector(".contact__body--submitted")



//  DOM Modal Elements Errors
const errorFirst = document.querySelector('.error-first')
const errorLast = document.querySelector('.error-last')
const errorEmail = document.querySelector('.error-eMail')
const errorMsg = document.querySelector('.error-msg')

// questions about best pratices https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute


// Tools
const openModal = (e) => {
  e.preventDefault()
  // pageWrapper.setAttribute('aria-hidden', 'true')
  modal = document.querySelector('.modal')
  focusables = Array.from(modal.querySelectorAll(focusableSelector))
  previouslyFocusElement = document.querySelector(':focus')
  focusables[0].focus()
  modal.style.display = null
  modal.removeAttribute('aria-hidden')
  modal.setAttribute('aria-modal', 'true')

  modalCloseBtn.addEventListener('click', closeModal);
  // CloseModal.addEventListener('click', closeModal);
  // body.classList.add('no-scroll')
}

const closeModal = (e) => {
  if (modal === null) return
  // pageWrapper.removeAttribute('aria-hidden')
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
  // CloseModal.removeEventListener('click', closeModal);
  // body.classList.remove('no-scroll')

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
// add event click to close the modal:




// Close modal when escape key is pressed
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeModal(e);
  }
  if (e.key === 'Tab' && modal !== null) {
    focusInModal(e)
  }
});



/* **************************************************************************************** */


// Form


// AU Moment du submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // debugger
  // closeModal();
  console.log('Prénom:', inputFirstName.value);
  console.log('Nom:', inputLastName.value);
  console.log('Email:', inputEmail.value);
  console.log('Message:', inputMessage.value);

  if (inputFirstName.value.length > 2) {
    alert ('Merci pour votre message');
  } else {
    alert('Veuillez reverifier vos informations');
  }
})