import {
    createHeader
} from '../utils.js'


fetch('../data.json')
    .then(data => data.json())
    .then(reponse => {

        console.log(reponse);
        
        const sectionHeader = document.querySelector('.header__portfolio--wrapper')
        const photographers = reponse.photographers
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const urlId = urlParams.get('photographerId')
        console.log(photographers)
        photographers.forEach(photographe => {
            if (photographe.id == urlId) {
                const header = createHeader(photographe)
                sectionHeader.innerHTML += header
            }
            console.log(urlId);
        })
        
    });