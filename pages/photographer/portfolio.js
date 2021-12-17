import {
    createHeader,
    createPreview,
    displayCostByDay,
    addListenerOnHearts,
    updateTotalLikeCount,
    onClickSelect,
    onClickFilters,
    onKeyboardFilters
} from '../../utils/utils.js'

const localstorage = localStorage.getItem('data')


if (localstorage) {
    const data = JSON.parse(localstorage)
    const sectionHeader = document.querySelector('.header__portfolio--wrapper')
    const likesAndPrice = document.querySelector('.likes-price')
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
            const price = displayCostByDay(photographe)
            sectionHeader.innerHTML += header
            likesAndPrice.innerHTML += price
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
    onClickSelect();
    onClickFilters(photographerPics);
    onKeyboardFilters(photographerPics);

}

// redirige vers index
else {
    document.location.href = "../";
}