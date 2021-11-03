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
        const urlId = urlParams.get('id')
        console.log(photographers)
        data.photographers.forEach(photographer => {
            if (photographer.id == urlId) {
                const header = createHeader(photographer)
                sectionHeader.innerHTML += header
            }

        })
        
    });