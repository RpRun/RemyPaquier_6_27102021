export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => {
        tagList += `<li class= "photographers__tags">#${tag}</li>`
    });

    const card = `<li class="photographers__cards">
    <a href="./pages/photographer/portfolio.html?photographerId=${photographe.id}" class="links__portfolio">
        <img class="photographers__portrait"
            src="./assets/Photos/PhotographersIdPhotos/${photographe.portrait}" alt="portrait du photographe">
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
        tagList += `<li class= "photographers__tags">#${tag}</li>`

    });

    const header = `<div class="photographers__infos--portfolio">
                    <h1 class="photographers__name">${photographe.name}</h1>
                    <p class="localisation">${photographe.city}, ${photographe.country}</p>
                    <p class="mojo">${photographe.tagline}</p> 
                        <ul role=navigation class="tags photographer__tags aria-label="tags filters"">
                        ${tagList}
                        </ul>                   
                    </div>  
                    <button class="js-modalOpen btn__ctc--header btn__ctc"  aria-label="Contacter le photographe ${photographe.name}">Contactez-moi</button>
                    <div class="photographers__portrait--container">
                    <img class="photographers__portrait photographers__portrait--portfolio" src="../../assets/Photos/PhotographersIdPhotos/${photographe.portrait}"
                     alt="portrait du photographe ${photographe.name}">
                     </div>`
    return header

}

export const createPreview = media => {
    const mediapreview = (media.image || media.video)
    if (mediapreview == media.image) {
        const preview__list = `<li class="thumbnails"><a href="../../assets/Photos/medias/${mediapreview}">
        <img class="thumbnails__medias" src="../../assets/Photos/medias/${mediapreview}" alt="Photo prise le ${media.date} ayant pour titre '${media.title}' et comme thème '${media.tags}'"></a>
        <div class="thumbnails__infos">
            <h2 class="thumbnails__heading">${media.title}</h2>
             <div class="likes-count" data-filter="" data-like-count="${media.likes}"><span class="total">${media.likes}</span><button class="heartBtn"><i class="far fa-heart heart"></i></button>              
        </div>
        </li>`

        return preview__list
    }

    if (mediapreview == media.video) {
        const preview__list = `<li class="thumbnails"><a href="../../assets/Photos/medias/${mediapreview}">
        <video Title="${media.title}" controls="" class="thumbnails__medias" src="../../assets/Photos/medias/${mediapreview}"></video></a>
        <div class="thumbnails__infos">
              <h2 class="thumbnails__heading">${media.title}</h2>
                 <div class="likes-count" data-filter="" data-like-count="${media.likes}"><span class="total">${media.likes}</span><button class="heartBtn"><i class="far fa-heart heart"></i></button>                
        </div>
        </li>`

        return preview__list

    }

}


export const tagsHandler = () => {
    const cards = document.querySelectorAll('.photographers__cards')
    const headerTags = document.querySelectorAll('.main-nav .tags li a')

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
                const tags = cardTags[j].outerText;
                // Si oui, on affiche les cards
                if (clickedTag.outerText.toLowerCase() == tags.toLowerCase()) {
                    cards[i].style.display = "block";
                }
            }
        }

        // =======
        // EXTRA
        // ======
        // Si un tag est déjà sélectionné
        if (selectedTag !== null) {
            // et si on re-click sur le même tag:
            if (selectedTag.outerText.toLowerCase() == clickedTag.outerText.toLowerCase()) {
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

}

// 1 -1 Ecoute le click sur les boutons contenant les coeurs, declenche togglelike
export const addListenerOnHearts = () => {
    const heartsBtn = document.querySelectorAll('.heartBtn')
    console.log('addListenerOnHearts')
    heartsBtn.forEach(heartBtn => {
        heartBtn.addEventListener('click', (event) => {
            toggleLike(event.target)
        })
        
    });
}

// 2 - 1 Recupere le nombre de like grace a l'attribut data-like, mets à jour le total du compteur media quand il est likée
// 2 - 2 Rajoute et enleve la classe 'fas' pour styliser l'action de liker (coeur plein)
// 2 - 3 Appelle la fonction qui mets à jour le total de likes sur la page
const toggleLike = (heartBtn) => {
    const likesCount = heartBtn.parentNode
    const heart = document.querySelectorAll('.heart')
    let currentCount = parseInt(likesCount.getAttribute('data-like-count') || 0)
    const total = likesCount.querySelector('.total')
    if (heart.classList.contains('fas')) {
        heart.classList.remove('fas')
        likesCount.setAttribute('data-like-count', currentCount -= 1)
    } else {
        heart.classList.add('fas')
        likesCount.setAttribute('data-like-count', currentCount += 1)
    }

    // heart.classList.toggle('fas')
    total.innerHTML = parseInt(likesCount.getAttribute('data-like-count', currentCount))
    updateTotalLikeCount()
    console.log('toggleLike')
    console.log(likesCount)
}

// Additionne tous les likes de la page
export const getTotalLikeCount = () => {
    
    let total = 0
    document.querySelectorAll('.likes-count').forEach(counter => {
        total += parseInt(counter.getAttribute('data-like-count'))
    })
    console.log('getTotalLikeCount')
    return total
}

// Inscrit la Mise à jour du compteur total de likes sur la page 
export const updateTotalLikeCount = () => {
    const totalPhotographersLikes = document.querySelector('.total-likes__amount')
    totalPhotographersLikes.innerHTML = getTotalLikeCount()
    console.log('updateTotalLikeCount')
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
export const onClickFilters = (photographerPics) => {
    const select = document.querySelector('.select__text')
    const filters = document.querySelectorAll('.sortBy li')
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            select.innerHTML = filter.innerHTML
            const value = filter.getAttribute('data-filter')
            reorganizeMedias(value, photographerPics)         
        })      
    });
}

// 
const reorganizeMedias = (value, photographerPics) => {
    console.log(value);
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
        const preview = createPreview(media)
        sectionPreview.innerHTML += preview
    });

    updateTotalLikeCount();
    addListenerOnHearts();
    
}


    // const byDate = photographerPics.sort( (a,b) => {
    //     return new Date(a.date).valueOf() - new Date(b.date).valueOf();

        // Par mois puis par jour

        // let d1 = new Date(a.date); 
        // let d2 = new Date(b.date);
        // console.log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());
        // if (d1.getUTCMonth() > d2.getUTCMonth()) {
        //     return 1;
        // } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
        //     return -1;            
        // } else {

        //     // même mois

        //     return d1.getUTCDate() - d2.getUTCDate();
        // }

    // })
    // console.log('par date', byDate)


    // const byTitle = photographerPics.sort( (a,b) => {
    //     if (a.title < b.title) return -1
    //     return 1;
    // })
    // console.log('par titre', byTitle)
    // console.log(photographerPics);
    // console.log(value);