//  Dom Elements
const ctcBg = document.querySelector('.contact-bground')
const ctcBtn = document.querySelectorAll('.btn__ctc')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.form')
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')
const inputEmail = document.querySelector('#message')
const thankClosing = document.querySelector(".contact__body--submitted")
const CloseModal = document.querySelector(".close-modal")


//  Dom Elements Errors
const errorFirst = document.querySelector('.error-first')
const errorLast = document.querySelector('.error-last')
const errorEmail = document.querySelector('.error-eMail')
const errorMsg = document.querySelector('.error-eMail')

// Tools
const launchModal = () => {
    ctcBg.style.display = "block";
}
const closeModal = () => {
    ctcBg.style.display = "none";
  }


// Form

// Launch modal event

ctcBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// add event click to launch closeModal()
closeBtn.addEventListener('click', closeModal);
CloseModal.addEventListener('click', closeModal);
