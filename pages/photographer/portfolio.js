import {
    createHeader,
    createPreview,addListenerOnHearts, updateTotalLikeCount, filterListener
} from '../../utils/utils.js'

const localstorage = localStorage.getItem('data')

if(localstorage) {
    const data = JSON.parse(localstorage)
    const sectionHeader = document.querySelector('.header__portfolio--wrapper')
    const photographers = data.photographers
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const urlId = urlParams.get('photographerId')
    let photographerPics = []

    // preview_list
    const sectionPreview = document.querySelector(`.preview__list`)
    const medias = data.media

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
            photographerPics.push(media)           
        }
    })
    
updateTotalLikeCount();
addListenerOnHearts();
filterListener(photographerPics);

}

 // redirige vers index
else {
    document.location.href="../";   

}

