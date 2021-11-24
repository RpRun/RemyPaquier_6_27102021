import {
    createHeader,
    createPreview,likesCountHandler
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
    likesCountHandler ();
    




// **********************************************************************
    //  Likes-count
    // const sectionLikes = document.querySelector('.likes-count')
    // const startLikes = data.likes
    // const btonLikes = document.querySelector('.heart')

    // btonLikes.forEach((btonLikes) => {
    //     btonLikes.addEventListener('click', () => {

    //         sectionLikes.innerHTML = `${1+startLikes}`;
    //     })
    // });
// **********************************************************************
    //  Likes-count
    // const Startlikes = data.Startlikes
    // let likesCount = ''
    //     Startlikes.forEach(like => {
    //         likesCount += `<div class="likes-count">${media.likes} <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
    //         </div>`
    //     })
// **********************************************************************



 
}
 // redirige vers index
else {
    document.location.href="../";   

}

