// Global DOM var
const body = document.querySelector('body')
const pageWrapper = document.querySelector('.photographer-page-wrapper')
const modal = document.querySelector('.modal')


//  DOM Modal Elements
const ctcBg = document.querySelector('.modal__bground')
const ctcBtn = document.querySelectorAll('.btn__ctc')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.form')
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')
const inputEmail = document.querySelector('#message')
const thankClosing = document.querySelector(".contact__body--submitted")
const CloseModal = document.querySelector(".close-modal")


//  DOM Modal Elements Errors
const errorFirst = document.querySelector('.error-first')
const errorLast = document.querySelector('.error-last')
const errorEmail = document.querySelector('.error-eMail')
const errorMsg = document.querySelector('.error-eMail')

// Tools
const launchModal = () => {
  pageWrapper.getAttribute('aria-hidden', 'true')
  modal.getAttribute('aria-hidden', 'false')
  body.classList.add('no-scroll')
  ctcBg.style.display = "block";
}
const closeModal = () => {
  pageWrapper.getAttribute('aria-hidden', 'false')
  modal.getAttribute('aria-hidden', 'true')
  body.classList.remove('no-scroll')

  ctcBg.style.display = "none";
}


// Form

// Launch modal event

ctcBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// add event click to launch closeModal()
closeBtn.addEventListener('click', closeModal);
CloseModal.addEventListener('click', closeModal);