import { createCard } from './utils.js'

const localstorage = localStorage.getItem('data')

if(localstorage) {
    const data = JSON.parse(localstorage)
    const sectionDom = document.querySelector('.photographers__list')
    const photographers = data.photographers
    for (let i = 0; i < photographers.length; i++) {            
        const card = createCard(photographers[i])
        sectionDom.innerHTML += card
    }
} 
else {
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
        })
}