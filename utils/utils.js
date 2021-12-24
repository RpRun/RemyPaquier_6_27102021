export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => {
        tagList += `<li class= "photographers__tags"><a href="">#${tag}</a></li>`
    });

    const card = `<li class="photographers__cards">
    <a href="./pages/photographer/portfolio.html?photographerId=${photographe.id}" class="links__portfolio">
        <img class="photographers__portrait"
            src="./assets/photos/PhotographersIdphotos/${photographe.portrait}" alt="">
        <h2 class="photographers__name">${photographe.name}</h2>
    </a>
    <div class="photographers__infos">
        <p class="localisation">${photographe.city}, ${photographe.country}</p>
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
        tagList += `<li class= "photographers__tags"><a href="../../index.html?tags=${tag}">#${tag}</a></li>`

    });

    const header = `<div class="photographers-infos__wrapper">
                        <div class="photographers__infos--portfolio">
                        <h1 class="photographers__name">${photographe.name}</h1>
                        <p class="localisation">${photographe.city}, ${photographe.country}</p>
                        <p class="mojo">${photographe.tagline}</p>                  
                        </div>                     
                        <button class="js-modalOpen btn__ctc--header btn__ctc"  aria-label="Contacter le photographe ${photographe.name}">Contactez-moi</button>
                        <div class="photographers__portrait--container">
                        <img class="photographers__portrait photographers__portrait--portfolio"
                        src="../../assets/photos/PhotographersIdphotos/${photographe.portrait}"
                        alt="portrait du photographe ${photographe.name}">
                        </div>
                    </div> 
                    <ul role=navigation class="tags photographer__tags aria-label="tags filters"">
                    ${tagList}
                    </ul>   
                    `

    return header

}

const getFolderNameFor = (name) => {
    const nameArray = name.split(' ')
    const firstName = nameArray[0].replace('-', ' ')
    return firstName
}


export const createPreview = (media, photographers) => {
    const mediapreview = (media.image || media.video)
    const currentPhotographer = photographers.filter((photographer) => photographer.id == media.photographerId)[0]
    console.log('currentPhotographer: ', currentPhotographer)
    const folderName = getFolderNameFor(currentPhotographer.name)
    console.log('folderName', folderName)
    if (mediapreview == media.image) {
        const preview__list = `<li class="thumbnails">
        <a href="../../assets/photos/medias/${folderName}/${mediapreview}"><img class="thumbnails__medias" src="../../assets/photos/medias/${folderName}/${mediapreview}" alt="Photo prise le ${media.date} ayant pour titre '${media.title}' et comme thème '${media.tags}'"></a>
        <div class="thumbnails__infos">
            <h2 class="thumbnails__heading">${media.title}</h2>
             <div class="likes-count" data-filter="" data-like-count="${media.likes}"><span class="total">${media.likes}</span><button class="heartBtn" aria-label="Cliquer pour aimer ce média"><i class="far fa-heart heart"></i></button>              
        </div>
        </li>`

        return preview__list
    }

    if (mediapreview == media.video) {
        const preview__list = `<li class="thumbnails"><a href="../../assets/photos/medias/${folderName}/${mediapreview}" aria-label="ouvrir cette vidéo dans le caroussel">
        <video title="${media.title}" controls="" class="thumbnails__medias" src="../../assets/photos/medias/${folderName}/${mediapreview}"></video></a>
        <div class="thumbnails__infos">
              <h2 class="thumbnails__heading">${media.title}</h2>
                 <div class="likes-count" data-filter="" data-like-count="${media.likes}"><span class="total">${media.likes}</span><button class="heartBtn" aria-label="Cliquer pour aimer ce média"><i class="far fa-heart heart"></i></button>                
        </div>
        </li>`

        return preview__list

    }

}


export const tagsHandler = () => {
    const cards = document.querySelectorAll('.photographers__cards')
    const headerTags = document.querySelectorAll('.main-nav .tags li')
    const cardsTags = document.querySelectorAll('.filters .tags')

    const handleFilters = (event) => {
        event.preventDefault();
        
        const selectedTag = document.querySelector('.selectedTag')
        const clickedTag = event.target

        // 1 - On enleve toutes les cards du dom
        for (let i = 0; i < cards.length; i += 1) {
            cards[i].style.display = "none";
        }

        // 2 - On vérifie si il n'y a pas déjà un 'selectedTag' dans la nav
        // Si oui (déjà un tag de cliqué):
        if (selectedTag !== null) {
            // On le retire
            selectedTag.classList.remove('selectedTag')
        }
        // 3 - Au click sur le tag, on rajoute la class:
        clickedTag.classList.add('selectedTag')

        // 4 - On affiche que les cards avec le meme tag que le tag cliqué

        // Pour chaque cards
        for (let i = 0; i < cards.length; i += 1) {
            const cardTags = cards[i].querySelectorAll('.tags li')

            // On recherche dans ses tags si clickedTag est présent
            for (let j = 0; j < cardTags.length; j++) {
                const tags = cardTags[j].innerText;
                // Si oui, on affiche les cards
                if (clickedTag.innerText.toLowerCase() == tags.toLowerCase()) {
                    cards[i].style.display = "block";
                }
            }
        }

        // Si un tag est déjà sélectionné
        if (selectedTag !== null) {
            // et si on re-click sur le même tag:
            if (selectedTag.innerText.toLowerCase() == clickedTag.innerText.toLowerCase()) {
                // la class 'selectedTag' est retirée
                clickedTag.classList.remove('selectedTag');
                // et on affiche toutes les cards
                for (let i = 0; i < cards.length; i += 1) {
                    cards[i].style.display = "block";
                }
            }
        }
    }

    headerTags.forEach((link) => link.addEventListener('click', (event) => {
        handleFilters(event)
    }));
    cardsTags.forEach((link) => link.addEventListener('click', (event) => {
        handleFilters(event)
    }));

}


export const urlTagsHandleur = () => {
    const cards = document.querySelectorAll('.photographers__cards')
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const urlTags = urlParams.get('tags')
    
    if (urlTags) {
        const newUrlTags = '#'+urlTags
        

        // 1 - On enleve toutes les cards du dom
        for (let i = 0; i < cards.length; i += 1) {
            cards[i].style.display = "none";
        }
        //  - On affiche que les cards avec le meme tag que le tag recupéré

        // Pour chaque cards
        for (let i = 0; i < cards.length; i += 1) {
            const cardTags = cards[i].querySelectorAll('.tags li')

            // On recherche dans ses tags si clickedTag est présent
            for (let j = 0; j < cardTags.length; j++) {
                const tags = cardTags[j].innerText;
                // Si oui, on affiche les cards
                
                if (newUrlTags.toLowerCase() == tags.toLowerCase()) {
                    cards[i].style.display = "block";
                }
            }
        }

    }
}


// 1 -1 Ecoute le click sur les boutons contenant les coeurs, declenche togglelike
export const addListenerOnHearts = () => {
    const heartsBtn = document.querySelectorAll('.heartBtn')
    heartsBtn.forEach(heartBtn => {
        heartBtn.addEventListener('click', () => {
            toggleLike(heartBtn)

        })

    });
}


// 2 - 1 Recupere le nombre de like grace a l'attribut data-like, mets à jour le total du compteur media quand le
//  bouton est liké
// 2 - 2 Rajoute et enleve la classe 'fas' pour styliser l'action de liker (coeur plein)
// 2 - 2 Modifie les aria label sur le bouton en fonction du contexte           
// 2 - 3 Appelle la fonction qui mets à jour le total de likes sur la page
const toggleLike = (heartBtn) => {
    const likesCount = heartBtn.parentNode
    const heart = heartBtn.querySelector('.heart')
    let currentCount = parseInt(likesCount.getAttribute('data-like-count') || 0)
    if (heart.classList.contains('fas')) {
        likesCount.setAttribute('data-like-count', currentCount -= 1)

        heartBtn.removeAttribute("aria-label", "J'aime")
        heartBtn.setAttribute("aria-label", "Cliquer pour liker ce média")

    } else {
        likesCount.setAttribute('data-like-count', currentCount += 1)
        heartBtn.removeAttribute("aria-label", "Cliquer pour liker ce média")
        heartBtn.setAttribute("aria-label", "J'aime")
    }

    heart.classList.toggle('fas')

    likesCount.querySelector('.total').innerHTML = parseInt(likesCount.getAttribute('data-like-count', currentCount))
    updateTotalLikeCount()
}

// Additionne tous les likes de la page
export const getTotalLikeCount = () => {

    let total = 0
    document.querySelectorAll('.likes-count').forEach(counter => {
        total += parseInt(counter.getAttribute('data-like-count'))
    })
    return total
}

// Inscrit la Mise à jour du compteur total de likes sur la page 
export const updateTotalLikeCount = () => {
    const totalPhotographersLikes = document.querySelector('.total-likes__amount')
    totalPhotographersLikes.innerHTML = getTotalLikeCount()
}

// Rajoute la classe display qui fait apparaitre la liste du dropdown
export const toggleFilters = () => {
    const ul = document.querySelector('.sortBy')
    ul.classList.toggle('display')
}

// Ecoute le click sur le select du dropdown
export const onClickSelect = () => {
    const select = document.querySelector('.selectContainer')
    select.addEventListener('click', () => {
        toggleFilters()
    })
}


// gestion du dropdown, au click sur le filtre (date, popularité...):
// le filtre remplace le select (choisir) en haut du dropdown
// on recupere l attribut data filter (date, popularité) du filtre selectionné
// on appelle la fonction qui reorganise les medias avec comme parametre l'attribut correspondant au filtre selectionné
export const onClickFilters = (photographerPics, photographers) => {
    const select = document.querySelector('.select__text')
    const filters = document.querySelectorAll('.sortBy li')
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            select.innerHTML = filter.innerHTML
            const value = filter.getAttribute('data-filter')
            reorganizeMedias(value, photographerPics, photographers)
            onKeyboardFilters()
        })
    });
}

// Gestion du dropdown au clavier
export const onKeyboardFilters = (photographerPics, photographers) => {
    const select = document.querySelector('.select__text')
    const filters = document.querySelectorAll('.sortBy li')
    filters.forEach(filter => {
        filter.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                select.innerHTML = filter.innerHTML
                const value = filter.getAttribute('data-filter')
                reorganizeMedias(value, photographerPics, photographers)
                toggleFilters()
            }
            if (e.key === 'Escape') {
                toggleFilters()
            }
        })
    });
}


// 
const reorganizeMedias = (value, photographerPics, photographers) => {
    console.log(value);
    console.log(photographerPics);
    const sectionPreview = document.querySelector('.preview__list')
    sectionPreview.innerHTML = '';

    switch (value) {
        case 'popular':
            photographerPics.sort((a, b) => b.likes - a.likes)
            break;
        case 'date':
            photographerPics.sort((a, b) => {
                if (new Date(a.date) < new Date(b.date)) return -1
                return 1;
            })
            break;
        case 'title':
            photographerPics.sort((a, b) => {
                if (a.title < b.title) return -1
                return 1;
            })
            break;
        default:
            console.log('filter error');
            break;
    }

    photographerPics.forEach(media => {
        const preview = createPreview(media, photographers)
        sectionPreview.innerHTML += preview
    });

    updateTotalLikeCount();
    addListenerOnHearts();
}


// Inscrit le coût par jour du photographe en bas de la page portfolio 
export const displayCostByDay = photographe => {
    const price = `<div class="cost-by-day">${photographe.price}€/jour</div>`
    return price
}