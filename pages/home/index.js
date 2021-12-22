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
    fetch('../data/data.json')
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


//Scroll button handler
// 1- Get the button:
const scrollBtn = document.querySelector('.scroll-btn');
// 2- If user scroll down, give focus on the button    
function toggleScrollBtn() {
    if (window.scrollY) {
        scrollBtn.classList.replace('scroll-hidden', 'scroll-visible')
        scrollBtn.focus()
    } else {
        scrollBtn.classList.replace('scroll-visible', 'scroll-hidden')
    }

}

document.addEventListener('scroll', (event) => {
    toggleScrollBtn(event.target)
    console.log('toggleScrollBtn');
})