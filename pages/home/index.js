import {
    createCard,
    tagsHandler
} from '../../utils/utils.js'

const localstorage = localStorage.getItem('data')

if (localstorage) {
    const data = JSON.parse(localstorage)
    const sectionDom = document.querySelector('.photographers__list')
    const photographers = data.photographers
    for (let i = 0; i < photographers.length; i++) {
        const card = createCard(photographers[i])
        sectionDom.innerHTML += card
    }

    tagsHandler();

} else {
    fetch('data.json')
        .then(data => data.json())
        .then(reponse => {

            localStorage.setItem('data', JSON.stringify(reponse))

            const sectionDom = document.querySelector('.photographers__list')
            const photographers = reponse.photographers
            for (let i = 0; i < photographers.length; i++) {
                const card = createCard(photographers[i])
                sectionDom.innerHTML += card
            }

            tagsHandler();
        })
}


// //Scroll button handler
// // 1- Get the button:
// const scrollBtn = document.querySelector('.scroll-btn');

// // 2 - When the user scrolls down 20px from the top of the document, show the button
// function toggleScrollBtn() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollBtn.style.transform = "translateY(60px)";
//     } else {
//         scrollBtn.style.transform = "translateY(-40px)";        
//     }
// }

// window.onscroll = function () {
//     toggleScrollBtn()
    
//     console.log('toggleScrollBtn');

// };


// // Reset display of the button if clicked, isnt working now, stuck in toggleScrollBtn if "document.body.scrollTop > 20"
// function resetScrollBtn() {
//     scrollBtn.style.transform = "translateY(-40px)";
    
// }

// scrollBtn.addEventListener('click', (event) => {
//     resetScrollBtn(event.target)
//     console.log('resetScrollBtn');
// })




 //Scroll button handler
 // 1- Get the button:
const scrollBtn = document.querySelector('.scroll-btn');

function toggleScrollBtn() {
    if (window.scrollY) {
        scrollBtn.classList.replace('scroll-hidden', 'scroll-visible') 
    } else {
        hideScrollBtn();
    }
      
}

document.addEventListener('scroll', (event) => {
    toggleScrollBtn(event.target)
    console.log('toggleScrollBtn');
})

function hideScrollBtn () {
    scrollBtn.classList.replace('scroll-visible', 'scroll-hidden')
    // scrollBtn.toggleAttribute
}

scrollBtn.addEventListener('click', (event) => {
    hideScrollBtn(event.target)
    console.log('hideScrollBtn');
})