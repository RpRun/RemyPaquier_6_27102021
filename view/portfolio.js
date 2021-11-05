import {
    createHeader,
    createPreview
} from '../utils.js'


fetch('../data.json')
    .then(data => data.json())
    .then(reponse => {

        console.log(reponse);
        // header
        const sectionHeader = document.querySelector('.header__portfolio--wrapper')
        const photographers = reponse.photographers
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const urlId = urlParams.get('photographerId')

        // preview_list
        const sectionPreview = document.querySelector(`.preview__list`)
        const medias = reponse.media

        photographers.forEach(photographe => {
            if (photographe.id == urlId) {
                const header = createHeader(photographe)
                sectionHeader.innerHTML += header
            }
        })

        medias.forEach(media => {
            if (media.photographerId == urlId) {
                const preview = createPreview(media)
                sectionPreview.innerHTML += preview
                
            }
        })
     
    });

   