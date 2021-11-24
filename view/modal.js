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
const inputEmail = document.querySelector('#email')
const inputMessage = document.querySelector('#message')
const thankClosing = document.querySelector(".contact__body--submitted")
const CloseModal = document.querySelector(".close-modal")


//  DOM Modal Elements Errors
const errorFirst = document.querySelector('.error-first')
const errorLast = document.querySelector('.error-last')
const errorEmail = document.querySelector('.error-eMail')
const errorMsg = document.querySelector('.error-msg')

// questions about best pratices https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute

// function giveFocus(e)
// {
// document.querySelector(${e}).focus();
// }

// Tools
const launchModal = () => {
  pageWrapper.setAttribute('aria-hidden', 'true')
  modal.setAttribute('aria-hidden', 'false')
  body.classList.add('no-scroll')
  ctcBg.style.display = "block";
  // giveFocus(closeBtn);
  document.querySelector('.close').focus();
  // focus() is not a function
}
const closeModal = () => {
  pageWrapper.setAttribute('aria-hidden', 'false')
  modal.setAttribute('aria-hidden', 'true')
  body.classList.remove('no-scroll')
  ctcBg.style.display = "none";
  // giveFocus(ctcBtn);
  document.querySelectorAll('.btn__ctc')
  // giveFocus(ctcBtn);
  //not sure about focus
}

// const giveFocus = (e) => {
//   document.e.focus()
// }


// Launch modal event
ctcBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// add event click to launch closeModal()
closeBtn.addEventListener('click', closeModal);
CloseModal.addEventListener('click', closeModal);



// Close modal when escape key is pressed
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    
  }
});


// $(document).on('keydown', e => {
//   const keyCode = e.keyCode ? e.keyCode : e.which

//   if (modal.setAttribute('aria-hidden') == 'false' && keyCode === 27) {
//       CloseModal()
//   }
// })


/* **************************************************************************************** */


// Form


// AU Moment du submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Prénom:', inputFirstName.value);
  console.log('Nom:', inputLastName.value);
  console.log('Email:', inputEmail.value);
  console.log('Message:', inputMessage.value);

  if (inputFirstName.value.length < 2) {
    console.log('PAS BOOOOON^^');
  }
  else {
    console.log('BOOOOON^^');
  }
})