import {
    createHeader,
    createPreview
} from '../utils.js'

const localstorage = localStorage.getItem('data')

if(localstorage) {
    const data = JSON.parse(localstorage)
    const sectionHeader = document.querySelector('.header__portfolio--wrapper')
    const photographers = data.photographers
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const urlId = urlParams.get('photographerId')

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
        }
    })

    //  Likes-count
    



 
}
 // redirige vers index
else {
    document.location.href="../";   

}

// / //  Likes-count
// const mediaLikes = document.querySelector('.likes-count')
// addEventListener.btonLikes
// medias.forEach(media => {

// })
 
//  const likes = likes.media
//     countLikes (likes) => {
    
//     const totalLikes = document.querySelector('.total-likes')
//     const btonLikes = document.querySelector('.heart')
    
//     addEventListener.btonLikes('click', e => {

// })

// }

