import { createCard } from './utils.js'


fetch('data.json')
    .then(data => data.json())
    .then(reponse => { 

        console.log(reponse);

        const sectionDom = document.querySelector('.photographers')
        const photographers = reponse.photographers

        for (let i = 0; i < photographers.length; i++) {            
            const card = createCard(photographers[i])
            sectionDom.innerHTML += card
        }

    })