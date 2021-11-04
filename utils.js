export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(pouet => { 
        tagList += `<li><a href="lalala">#${pouet}</a></li>`
        
    });

    const card = `<li class="photographers__cards">
    <a href="./view/portfolio.html?photographerId=${photographe.id}" class="links__portfolio">
        <img class="photographers__portrait"
            src="./public/Photos/PhotographersIdPhotos/${photographe.portrait}" alt="portrait du photographe">
        <h2 class="photographers__name">${photographe.name}</h2>
    </a>
    <div class="photographers__infos">
        <p class="localisation">${photographe.city}</p>
        <p class="mojo">${photographe.tagline}</p>
        <p class="cost">${photographe.price}€/jour</p>
    </div>
    <div class="filters" role="navigation" aria-label="tags filters">
        <ul class="tags">${tagList}</ul>  
    </div>
    </li>`

return card

}

export const createHeader = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => { 
        tagList += `<li><a href="">#${tag}</a></li>`
        
    });

    const header = `<div class="photographers__infos--portfolio">
                    <h1 class="photographers__name">${photographe.name}</h1>
                    <p class="localisation">${photographe.city}, ${photographe.country}</p>
                    <p class="mojo">${photographe.tagline}</p> 
                        <ul role=navigation class="tags photographer__tags aria-label="tags filters"">
                        ${tagList}
                        </ul>                   
                    <button class="header-contact modal-btn">Contactez-moi</button>
                </div>

            <img class="photographers__portrait" src="../public/Photos/PhotographersIdPhotos/${photographe.portrait}"
                alt="portrait du photographe">`

return header    

}

export const createPreview = media => {
    const mediapreview = (media.image || media.video)
    if (mediapreview == media.image) {
        const preview__list = `<li class="thumbnails"><a href=""><img class="thumbnails__img"
    src="../public/Photos/medias/${mediapreview}"></a>
<div class="thumbnails__infos">
<h2 class="thumbnails__heading">${media.title}</h2>
<div class="likes-count">${media.likes} <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
</div>
</li>`
return preview__list
    }

    if (mediapreview == media.video) {
        const preview__list = `<li class="thumbnails"><a href=""><video controls="" class="thumbnails__img" src="../public/Photos/medias/${mediapreview}"></video>
    </a>
<div class="thumbnails__infos">
<h2 class="thumbnails__heading">${media.title}</h2>
<div class="likes-count">${media.likes} <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
</div>
</li>`

return preview__list
    

}
}